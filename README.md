# Electron-study

## 1. 生命周期
- ready: app初始化完成
- dom-ready: 一个窗口中的文本加载完成
- did-finish-load: 导航完成时触发
- window-all-closed: 所有窗口都被关闭时触发
- before-quit: 在关闭窗口之前触发
- will-quit: 在窗口关闭并且应用退出时触发
- quit: 当所有窗口被关闭时触发
- closed: 当窗口关闭时触发，此时应删除窗口应用