import { observe } from '../observe/index'
export const useState = function (vm) {
    console.log('进入useState', vm);
    const opts = vm.$options
    if (opts.props) {
        _initProps(vm)
    }
    if (opts.data) {
        _initData(vm)
    }
    if (opts.methods) {
        _initMethods(vm)
    }
    if (opts.computed) {
        _initComputed(vm)
    }
    if (opts.watch) {
        _initWatch(vm)
    }
}

function _initProps () {}
function _initData (vm) {
    let data = vm.$options.data
    // data.call 用于指向实例，在使用的时候this仍能指向当前实例
    data = vm._data = typeof data === 'function' ? data.call() : data
    console.log(data);
    // 对象劫持
    // mvvm模式，数据驱动视图
    observe(data) // 响应式原理
}
function _initMethods () {}
function _initComputed () {}
function _initWatch () {}