module.exports = {
    devServer: {
        port: 8080, // 端口
        proxy: {
            '/api': {
                target: 'http://localhost:10086/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/getIPapi': {
                target: 'http://ident.me/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/getIPapi': ''
                }
            }
        }
    },
    lintOnSave: true // 取消 eslint 验证
}

