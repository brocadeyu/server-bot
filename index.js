const fs = require('fs');
const path = require('path');
const http = require('http');
const { exec } = require('child_process');
const fsPromises = require('fs/promises');

const port = 4000; // 主应用服务端口
const appsDir = path.resolve(__dirname, 'apps');
const srcDir = path.resolve(__dirname, "src")
// 定义静态文件根目录
const assetsRoot = path.join(__dirname, 'src/assets');
const indexFilePath = path.resolve(__dirname, 'index.html');

// 获取所有子目录
const getDirectories = (source) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
// 解析子应用的 index.html，获取标题和图标
const parseAppIndex = async (appPath) => {
  try {
    const indexPath = path.join(appPath, 'index.html');
    const content = await fsPromises.readFile(indexPath, 'utf8');
    // 使用正则提取 <title> 和 <link rel="icon">
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const iconMatch = content.match(/<link[^>]*rel=["']icon["'][^>]*href=["']([^"']+)["']/i);

    const title = titleMatch ? titleMatch[1] : 'Untitled';
    const icon = iconMatch ? iconMatch[1] : '';
    return { title, icon };
  } catch (error) {
    return { title: 'Untitled', icon: '' }; // 默认值
  }
};
// 构建应用列表
const projects = getDirectories(appsDir).map((project, index) => ({
  name: project,
  url: `http://localhost:${3000 + index}`,
}));

// 构建应用列表
const getProjects = async () => {
  const directories = getDirectories(appsDir);
  const projects = await Promise.all(
    directories.map(async (project, index) => {
      const projectPath = path.join(appsDir, project);
      const { title, icon } = await parseAppIndex(projectPath);
      return {
        name: project,
        url: `http://localhost:${3000 + index}`,
        title,
        icon,
      };
    })
  );
  return projects;
};

// 检查是否有项目
if (projects.length === 0) {
  console.error('No projects found in apps directory.');
  process.exit(1);
}

// 构建 serve 命令
const commands = projects.map((project, index) => {
  // console.log("appsDir", appsDir);
  // console.log("project", project);

  const projectPath = path.join(appsDir, project.name);
  const port = 3000 + index; // 每个项目分配一个端口
  // console.log(`Starting ${project} on http://localhost:${port}`);
  return `serve -s ${projectPath} -l ${port}`;
});

// 使用 concurrently 启动所有服务
const fullCommand = `npx concurrently "${commands.join('" "')}" "serve ${srcDir} -l ${port - 1}"`;
// console.log("commands", commands);
// console.log("fullCommand", fullCommand);

//+“serve -s ${srcDir} -l 5000”
exec(fullCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});

// 获取文件的 MIME 类型
function getMimeType(ext) {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

// 创建 HTTP 服务器
const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/apps') {
    const projects = await getProjects();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(projects));
  }
  else if (req.method === 'GET' && req.url === '/') {
    try {
      const content = await fsPromises.readFile(indexFilePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading index.html');
    }
  }
  else if (req.method === 'GET' && req.url.includes('/assets')) {
    const filePath = path.resolve(__dirname) + req.url;
    try {
      // 检查文件是否存在
      const fileStat = await fsPromises.stat(filePath);

      if (fileStat.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = getMimeType(ext);

        const content = await fsPromises.readFile(filePath);
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(content);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}
);


// 启动服务并自动打开浏览器
server.listen(port, () => {
  console.log(`Main app server is running at http://localhost:${port}`);

  // // 自动打开默认浏览器
  // const url = `http://localhost:${port}`;
  // switch (process.platform) {
  //   case 'darwin':
  //     exec(`open ${url}`);
  //     break;
  //   case 'win32':
  //     exec(`start ${url}`);
  //     break;
  //   default:
  //     exec(`xdg-open ${url}`);
  // }
});
