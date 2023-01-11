// rollup.config.js
import del from 'rollup-plugin-delete'
import styles from 'rollup-plugin-styles'
import copy from 'rollup-plugin-copy'
import mdcss from 'mdcss'
import mdcssTheme from 'mdcss-theme-github'

const styleModule = (styleName, path) => ({
  input: path,
  output: [
    {
      file: 'dist/'+styleName+'.js',
      format: 'es',
      assetFileNames: "[name][extname]",
    },
  ],
  plugins: [
    del({
      targets: ['./style-dist'],
    }),
    styles({
      mode: ["extract", styleName+".module.css"],
      minimize: true, // minify
      url: {
        hash: false,
        publicPath: 'assets/',
      }
    }),
  ]
})

const docsBundle = {
  input: 'src/bundle/index.scss',
  output: [
    {
      file: 'style-dist/index.js',
      assetFileNames: '[name][extname]',
      format: 'es'
    },
  ],
  plugins: [
    del({
      targets: ['dist/*.js','style-dist'],
    }),
    copy({
      targets: [
        { src: './docs/style.css', dest: './style-dist/' },
        { src: './docs/script.js', dest: './style-dist/' },
        { src: './docs/examples.js', dest: './style-dist/' },
      ]
    }),
    styles({
      mode: ["extract", "bundle.css"],
      minimize: true, // minify
      url: {
        hash: false,
        publicPath: 'assets/',
      },
      plugins: [
        mdcss({
          theme: mdcssTheme({
            title: 'css-module-library',
            examples: {
              css: ['./bundle.css'],
            }
          }),
          destination: 'style-dist'
        })
      ]
    }),
  ]
}

export default [
  styleModule('typography', 'src/modules/typography.module.scss'),
  styleModule('buttons', 'src/modules/buttons.module.scss'),
  styleModule('colors', 'src/modules/colors.module.scss'),
  styleModule('icons', 'src/modules/icons.module.scss'),
  styleModule('snackbars', 'src/modules/snackbars.module.scss'),
  docsBundle,
]