const scriptElement = document.createElement('script')
scriptElement.type = 'text/javascript'
scriptElement.src = 'https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js'
document.getElementsByTagName('head')[0].appendChild(scriptElement)
// 引入成功
scriptElement.onload = function () {
  try {
    new VConsole()
  } catch (err) {
    console.log('err', err)
  }
}
// 引入失败
scriptElement.onerror = function () {
}