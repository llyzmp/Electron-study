const { app, BrowserWindow } = require('electron')

// 创建窗口

function createWindow() {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600
  })

  // 在当前窗口中加载指定界面让它展示具体内容
  mainWin.loadFile('index.html');

  mainWin.webContents.on('did-finish-load', () =>{
    console.log('33333----->did-finish-load')
  })
  mainWin.webContents.on('dom-ready', () =>{
    console.log('22222----->dom-ready')
  })

  // 关闭窗口
  mainWin.on('close', () => {
    console.log('88888 ---> this window is closed');
    // 清空实例，释放内存
    mainWin = null;
  })
}


app.on('ready', () => {
  console.log('11111--->ready');
  createWindow();
});



// 所有窗口关闭,
// 注意 监听了该事件，要考虑是否退出该应用app.quit()
// 没有监听的话，默认会退出应用
app.on('window-all-closed', () => {
  console.log('44444---->window-all-closed');
  // 手动退出
  app.quit();
})

app.on('before-quit', () => {
  console.log('55555---->before-quit');
})
app.on('will-quit', () => {
  console.log('66666---->will-quit');
})
app.on('quit', () => {
  console.log('77777---->quit');
})
