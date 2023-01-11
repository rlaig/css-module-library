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
        file: 'style-dist/index.js',
        assetFileNames: '[name][extname]',
        format: 'es'
      },
    ],
    plugins: [
      del({
        targets: ['style-dist'],
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
]