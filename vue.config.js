module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "ToDo App";
      return args;
    });
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-vuex-store-typescript/" : "/",
};
