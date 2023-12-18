const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': { // this can be any path that doesn't collide with your Vue routes
        target: 'http://localhost:8081', // the domain of your backend server
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: { '^/api': '' }, // rewrite paths, removing '/api', if desired
      },
    },
  },
})
