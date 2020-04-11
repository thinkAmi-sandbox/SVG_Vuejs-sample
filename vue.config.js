const { basename } = require('path');

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

      // プラグインを追加
      .options({
        svgo: {
          plugins: [
            {
              // デフォルトではSVGファイル中のidを消してしまうため、idをそのままにする
              // https://vue-svg-loader.js.org/faq.html#how-to-prefix-id-attributes
              // https://stackoverflow.com/questions/49417928/vue-svg-loader-removes-some-g-tags-while-loading-svgs
              // cleanupIDs: false,

              // 下のは、classNameにprefixが付与される
              prefixIds: true,

              // これはカスタマイズしたprefixが付与される
              // prefixIds: {
              //   prefix: (node, { path }) => basename(path, '.svg'),
              //   delim: '-',
              // },
            },
          ],
        },
      });
  },
};