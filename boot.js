const express = require('express');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio'); // 用于解析 HTML

const app = express();
const BASE_PORT = 3000; // 起始端口号
const APPS_DIR = path.join(__dirname, 'apps'); // 根目录
const ROOT_DIR = path.join(__dirname); // 根目录
let appsList = []; // 存储启动的 app 信息

// 从 index.html 或子目录的 index.html 中提取 icon 链接
function extractIcon(appDir) {
    // 定义一个递归函数来查找 index.html
    function findIndexHtml(dir) {
        const indexPath = path.join(dir, 'index.html');
        if (fs.existsSync(indexPath)) {
            return indexPath;
        }
        // 查找子目录
        const subDirs = fs.readdirSync(dir).filter(file => {
            const filePath = path.join(dir, file);
            return fs.lstatSync(filePath).isDirectory();
        });
        for (const subDir of subDirs) {
            const result = findIndexHtml(path.join(dir, subDir));
            if (result) return result;
        }
        return null;
    }

    // 查找 index.html
    const indexPath = findIndexHtml(appDir);
    if (indexPath) {
        const htmlContent = fs.readFileSync(indexPath, 'utf8');
        const $ = cheerio.load(htmlContent);

        // 查找 <link rel="icon" href="...">
        const iconLink = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');
        if (iconLink) {
            return iconLink.startsWith('http') ? iconLink : path.join('/', path.relative(appDir, path.dirname(indexPath)), iconLink);
        }
    }
    return null;
}

// 动态扫描目录并启动服务
function startApps() {
    appsList = []; // 清空已启动的应用列表
    let port = BASE_PORT;

    // 读取 apps 目录
    const entries = fs.readdirSync(APPS_DIR, { withFileTypes: true });

    entries.forEach((entry, index) => {
        if (entry.isDirectory()) {
            const appDir = path.join(APPS_DIR, entry.name);

            // 检查子目录是否有内容（直接托管子目录）
            if (fs.existsSync(appDir) && fs.lstatSync(appDir).isDirectory()) {
                // 提取 icon 信息
                const icon = extractIcon(appDir);
                // 启动静态服务
                const subApp = express();
                // 自定义中间件处理目录和文件
                subApp.use((req, res, next) => {
                    const requestedPath = path.join(appDir, req.path);

                    if (fs.existsSync(requestedPath)) {
                        if (fs.lstatSync(requestedPath).isDirectory()) {
                            // 检查目录下是否有 index.html
                            const indexFilePath = path.join(requestedPath, 'index.html');
                            if (fs.existsSync(indexFilePath)) {
                                // 如果存在 index.html，直接返回内容
                                res.sendFile(indexFilePath);
                            } else {
                                // 如果没有 index.html，返回目录文件列表
                                const files = fs.readdirSync(requestedPath).map(file => {
                                    const filePath = path.join(req.path, file);
                                    const isDirectory = fs.lstatSync(path.join(appDir, filePath)).isDirectory();
                                    if (filePath.includes('.DS_Store')) return ""
                                    if (filePath.includes('files')) return ""
                                    if (filePath.includes('build')) return ""
                                    return `<li><a href="${filePath}${isDirectory ? '/' : ''}">${file}</a></li>`;
                                });
                                res.send(`<ul>${files.join('')}</ul>`);
                            }
                        } else {
                            // 如果是文件，继续处理
                            next();
                        }
                    } else {
                        res.status(404).send('Not Found');
                    }
                });

                // 提供静态文件服务
                subApp.use(express.static(appDir));
                const p = port + 1 + index
                subApp.listen(p, () => {
                    console.log(`Serving ${entry.name} at http://localhost:${p}`);
                });

                // 添加到应用列表
                appsList.push({
                    name: entry.name,
                    path: appDir,
                    url: `http://localhost:${p}`,
                    icon: icon ? `http://localhost:${p}${icon}` : null, // 如果 icon 是相对路径，加上服务器地址
                });

                port++;
            }
        }
    });

}

// 暴露接口，返回应用列表
app.get('/apps', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // 允许的方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 允许的请求头
    res.json(appsList);
});


const mApp = express();
mApp.use(express.static(ROOT_DIR));
mApp.listen(8089, () => {
    console.log(`Serving at http://localhost:${8089}`);
});

// 主服务器启动
const mainPort = BASE_PORT - 1;
app.listen(mainPort, () => {
    console.log(`Main server running at http://localhost:${mainPort}`);
    console.log(`Use http://localhost:${mainPort}/apps to view the app list.`);

    // 动态启动所有 apps
    startApps();
});
