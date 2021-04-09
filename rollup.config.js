import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
    input: './src/index.js', // 打包文件入口
    output: {
        file: 'dist/umd/vue.js', // 出口路径
        name:'Vue', // 指定打包后全局变量的名字
        format:'umd', // umd打包模式
        sourcemap:true, // es6>es5 开启源码调试，找到源码报错位置
    },
    plugins: [ // 插件
        babel({
            exclude: "node_modules/**" // 非打包路径
        }),
        process.env.ENV ==='development' ? serve({ // 默认启动一个服务
            open: true, // 开启
            openPage: '/public/index.html', // 打开一个网页
            port: 3000, // 端口
            contentBase: ''
        }) : null
    ]
}