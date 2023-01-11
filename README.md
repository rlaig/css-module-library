
# css-module-library
[![conventionalcommits](https://img.shields.io/static/v1?logo=conventionalcommits&label=conventional%20commits&message=commit-lint&labelcolor=222)](https://conventionalcommits.org)
[![sass](https://img.shields.io/static/v1?logo=sass&label=sass&message=style&labelcolor=222)](https://sass-lang.com/)
[![css-modules](https://img.shields.io/static/v1?logo=cssmodules&label=css-modules&message=style&labelcolor=222)](https://github.com/css-modules/css-modules)
[![css3](https://img.shields.io/static/v1?logo=css3&label=CSS3&message=style&labelcolor=222)](#)
[![rollup.js](https://img.shields.io/static/v1?logo=rollupdotjs&label=Rollup.js&message=build&labelcolor=222)](https://rollupjs.org/)
[![PostCSS](https://img.shields.io/static/v1?logo=postcss&label=PostCSS&message=build&labelcolor=222)](https://github.com/postcss/postcss)

A design system library template for css styles, fonts, colors and svg icons.

## Usage
Import and use as a [css-modules](https://github.com/css-modules/css-modules).

Then create your component like in this example:

React
```javascript
import module from '{module-name}.module.css';

export const App = () => {
 return <div>
  <div className={`${module.style1} ${buttons.style2} ${buttons.style3}`}>
    Styled Component
  </div>
 </div>
}
```

Vue.js
```javascript
import module from '{module-name}.module.css';

document.getElementById("app").innerHTML = `
<div>
  <div class="${module.style1} ${module.style2} ${module.style3}">
    Styled Component
  </div>
 </div>
`;
```

## Development

Source files is structured as ff:

```bash
...
├── src
│   ├── bundle
│   │   └── index.scss
│   ├── components
│   │   ├── buttons.scss
│   │   ├── colors.scss
│   │   ├── icons.scss
│   │   ├── index.scss
│   │   ├── snackbars.scss
│   │   └── typography.scss
│   │   └── ... any other components
│   ├── constants
│   │   ├── colors.scss
│   │   ├── icons.scss
│   │   ├── index.scss
│   │   └── typography.scss
│   │   └── ... any other constants
│   ├── fonts
│   │   ├── ... all fonts
│   │   └── otherfonts.scss
│   ├── helpers
│   │   ├── helpers.scss
│   │   ├── index.scss
│   │   └── mixins.scss 
│   ├── misc
│   │   └── example.scss
│   ├── modules
│   │   ├── buttons.module.scss
│   │   ├── colors.module.scss
│   │   ├── demo.module.scss
│   │   ├── icons.module.scss
│   │   ├── snackbars.module.scss
│   │   └── typography.module.scss
│   │   └── ... any other modules
│   ├── svg
│   │   └── ... all svg icons
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
...
```

Modify and change scss files as needed and apply these on `App.tsx`

Install dependencies
```bash
yarn
```
Run development demo to preview changes
```bash
yarn dev
```
Run development demo to preview mdcss changes
```bash
yarn gendocs
```

Then, if you want to try out and see how your changes will compile, run build:

```bash
yarn build
```
A new folder `dist` and `style-dist` should appear and contain the compiled scss files and generated mdcss deocumentation.
