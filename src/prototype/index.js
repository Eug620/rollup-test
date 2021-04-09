import { useState } from '../useState.js/index';
export const initPrototype = (Vue) => {
    // 初始化操作
    Vue.prototype._init = function (opt) {
        console.log('进入 _init', opt);
        const vm = this
        vm.$options = opt
        useState(vm)
    }
}