const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});
module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "https://exitnow.link",
        changeOrigin: true,
      },
    },
  },
};
