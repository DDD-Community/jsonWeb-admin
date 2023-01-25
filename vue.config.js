const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});
module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://exitnow.link",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      },
    },
  },
};
