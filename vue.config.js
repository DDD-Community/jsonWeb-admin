const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});
module.exports = {
  devServer: {
    proxy: "https://exitnow.link",
  },
};
