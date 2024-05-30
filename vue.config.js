const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 部署应用时的基本 URL,防止页面白屏
  publicPath:"./"

})
