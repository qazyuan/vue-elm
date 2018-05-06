module.exports = {
    devtool: 'source-map', //调试配置，生成source maps
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "js/index.js"//打包后输出文件的文件名
    },

    module: {
        loaders: [
          {
            loaders: [ 'babel-loader' ],
            exclude: /node_modules/,
            include: __dirname
          }
        ]
    },
    //以下是服务环境配置
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true, //实时刷新
        host: "10.24.230.7", //本机的局域网ip
        open: true //是否运行成功后直接打开页面
    }

}