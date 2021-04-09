// 使用Object.defineProperty重新定义data
// es5语法，不兼容ie8
export function observe (data) {
    console.log('observe取到data', data);
}