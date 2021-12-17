import html from 'vite-plugin-html'

export function createHtmlPlugin(env, isBuild) {
  const { VITE_GLOB_APP_TITLE } = env;

  const htmlPlugin = html({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE,
      },
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: '/_app.config.js',
              },
            },
          ]
        : [],
    },
  });
  return htmlPlugin
}
