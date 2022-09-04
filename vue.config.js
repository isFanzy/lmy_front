module.exports = {
    devServer: {
        port: 8080, // 端口
        proxy: {
            '/api': {
                target: 'http://localhost:10086/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/getIPapi': {
                target: 'http://ip-api.com/',
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

