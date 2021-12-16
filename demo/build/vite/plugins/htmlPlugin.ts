import html from 'vite-plugin-html'

export function createHtmlPlugin(env, isBuild) {
  const htmlPlugin = html({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      // Embed the generated app.config.js file
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: '/_app.config.js'
              }
            }
          ]
        : []
    }
  })
  return htmlPlugin
}
