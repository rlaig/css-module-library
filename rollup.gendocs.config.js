// rollup.js config for generating style documentation from mdcss
import del from 'rollup-plugin-delete'
import copy from 'rollup-plugin-copy'
import styles from 'rollup-plugin-styles'
import mdcss from 'mdcss'
import mdcssTheme from 'mdcss-theme-github'

export default [
  {
    input: 'src/bundle/index.scss',
    output: [
      {
        file: 'docs/index.js',
        assetFileNames: '[name][extname]',
        format: 'es'
      },
    ],
    plugins: [
      del({
        targets: ['docs'],
      }),
      copy({
        targets: [
          { src: './docs-assets/style.css', dest: './docs/' },
          { src: './docs-assets/script.js', dest: './docs/' },
          { src: './docs-assets/examples.js', dest: './docs/' },
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
            destination: 'docs'
          })
        ]
      }),
    ]
  }
]