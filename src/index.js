import { initPrototype } from './prototype/index'
// 此文件作为声明
function Vue(options) {
    console.log('初始进入Vue');
    // 初始化
    this._init(options)

}
initPrototype(Vue)
export default Vue