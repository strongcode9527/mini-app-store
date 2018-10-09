module.exports = function(store, options) {
  if( arguments.length !== 2 ) {
    throw Error('mini-app-store create函数必须为两个参数')
  }

  if(options.data) {
    throw Error('在页面的定义中，不允许自定义data，所有数据必须在store定义完成')
  }


  // 在onLoad钩子函数中完成store的注入

  const onLoad = options.onLoad

  options.data = store.data

  options.onLoad = function(e) {
    this.store = store
    onLoad && onLoad.call(this, e)
  }

  Page(options)
}