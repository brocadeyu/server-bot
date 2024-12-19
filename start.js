const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 定义 apps 目录路径
const appsDir = path.resolve(__dirname, 'apps');

// 获取所有子目录
const getDirectories = (source) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

// 读取 apps 目录下的所有项目
const projects = getDirectories(appsDir);

if (projects.length === 0) {
  console.error('No projects found in apps directory.');
  process.exit(1);
}

// 构建 serve 命令
const commands = projects.map((project, index) => {
  const projectPath = path.join(appsDir, project);
  const port = 3000 + index; // 每个项目分配一个端口
  console.log(`Starting ${project} on http://localhost:${port}`);
  return `serve -s ${projectPath} -l ${port}`;
});

// 使用 concurrently 启动所有服务
const fullCommand = `npx concurrently "${commands.join('" "')}"`;

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
