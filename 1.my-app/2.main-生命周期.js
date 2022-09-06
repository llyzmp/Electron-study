const { app, BrowserWindow } = require('electron')

// 当app启动之后执行窗口等操作
app.whenReady().then(() => {
  const mainWin = new BrowserWindow({
    width: 600,
    height: 400
  })

  // 在当前窗口中加载指定界面让它展示具体内容
  mainWin.loadFile('index.html');

  // 关闭窗口
  mainWin.on('close', () => {
    console.log('关闭窗口----');
  })
})

// 所有窗口关闭
app.on('window-all-closed', () => {
  console.log('所有窗口关闭');
  app.quit();
})
