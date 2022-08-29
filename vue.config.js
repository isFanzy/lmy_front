module.exports = {
    devServer: {
        port: 8080, // 端口
        proxy: {
            '/api': { //请求路径关键字
                target: 'https://localhost:10086/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false // 取消 eslint 验证
}
