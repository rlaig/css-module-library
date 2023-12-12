import * as React from "react"

// from src as scss css-modules
import demo from "./modules/demo.module.scss"
import icons from "./modules/icons.module.scss"
import colors from "./modules/colors.module.scss"
import buttons from "./modules/buttons.module.scss"
import fonts from "./modules/typography.module.scss"
import snackbars from "./modules/snackbars.module.scss"

// from dist as css-modules
// import colors from "../dist/colors.module.css"
// import buttons from "../dist/buttons.module.css"
// import fonts from "../dist/fonts.module.css"

export const App = () => {

 return <div className={demo.demoTheme}>
  <div className={demo.clear5}></div>
  <h2>CSS Demo Page</h2>
  <div className={demo.clear}></div>
  <p>This is a demo page to showcase on mobile web view, looking for the <a href="/docs/">documentation</a>?</p>
  <div className={demo.clear5}></div>
  
  <h3>Typography & Fonts</h3>
  <hr></hr>
  <div className={demo.clear20}></div>

  <table className={`${fonts.fontAndroid} ${demo.tableFontDemo}`}>
    <tbody>
    <tr>
      <td colSpan={2} style={{"textAlign":"center"}} className={`${colors.colorWhite} ${colors.bgColorBlack}`}>Android - Roboto</td>
    </tr>
    <tr>
      <td>
        H1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH1} ${colors.colorNobael900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        H2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        H3
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        H4
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        Body1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeBody1} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        Body2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeBody2} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        Caption
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeCaption} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div> 
      </td>
    </tr>
    </tbody>
  </table>

  <div className={demo.clear20}></div>

  <table className={`${fonts.fontIos} ${demo.tableFontDemo}`}>
    <tbody>
    <tr>
      <td colSpan={2} style={{"textAlign":"center"}} className={`${colors.colorWhite} ${colors.bgColorBlack}`}>iOS - SF Pro Display</td>
    </tr>
    <tr>
      <td>
        H1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        H2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        H3
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        H4
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        Body1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeBody1} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        Body2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeBody2} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        Caption
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeCaption} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeCaption} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div> 
      </td>
    </tr>
    </tbody>
  </table>

  <div className={demo.clear20}></div>

  <table className={`${fonts.fontWeb} ${demo.tableFontDemo}`}>
    <tbody>
    <tr>
      <td colSpan={2} style={{"textAlign":"center"}} className={`${colors.colorWhite} ${colors.bgColorBlack}`}>Web - Noto Sans</td>
    </tr>
    <tr>
      <td>
        H1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        H2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        H3
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH3} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        H4
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeH4} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        Body1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeBody1} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeBody1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
      <td>
        Body2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeBody2} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeBody2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    <tr>
      <td>
        Caption1
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeCaption1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeCaption1} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeCaption1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeCaption1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeCaption1} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div> 
      </td>
      <td>
        Caption2
        <div className={demo.clear5}></div>
        <div className={`${fonts.sizeCaption2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.sizeCaption2} ${fonts.styleStrikethrough} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightMedium} ${fonts.sizeCaption2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightBold} ${fonts.sizeCaption2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
        <div className={`${fonts.weightHeavy} ${fonts.sizeCaption2} ${colors.colorNobel900}`}>
          The quick brown fox jumps over the lazy dog
        </div>
      </td>
    </tr>
    </tbody>
  </table>

  <h3>Colors</h3>
  <hr></hr>
  <div className={demo.clear5}></div>
  &nbsp;Primary
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary300} ${colors.colorNobel050}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPrimary900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Secondary
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary300} ${colors.colorNobel050}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorSecondary900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Mineshaft
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft300}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMineshaft900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Nobel
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel300}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorNobel900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Mountainmedows
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows300} ${colors.colorNobel050}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorMountainmedows900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Pictonblue
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue300} ${colors.colorNobel050}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorPictonblue900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Treepoppy
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy300} ${colors.colorNobel050}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorTreepoppy900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Valencia
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia050}`}>050</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia100}`}>100</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia200}`}>200</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia300} ${colors.colorNobel050}`}>300</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia400} ${colors.colorNobel050}`}>400</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia500} ${colors.colorNobel050}`}>500</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia600} ${colors.colorNobel050}`}>600</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia700} ${colors.colorNobel050}`}>700</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia800} ${colors.colorNobel050}`}>800</div>
  <div className={`${demo.colorDemo} ${colors.bgColorValencia900} ${colors.colorNobel050}`}>900</div>
  <div className={demo.clear5}></div>
  &nbsp;Black & White
  <div className={demo.clear}></div>
  <div className={`${demo.colorDemo} ${colors.bgColorBlack} ${colors.colorNobel050}`}>Black</div>
  <div className={`${demo.colorDemo} ${colors.bgColorWhite}`}>White</div>
  <div className={demo.clear10}></div>

  <h3>Shadows</h3>
  <hr></hr>
  <div className={`${demo.circleDemo} ${colors.shadowSwitch} ${colors.colorMineshaft800}`}>switch</div>
  <div className={`${demo.circleDemo} ${colors.shadowCard} ${colors.colorMineshaft800}`}>card</div>
  <div className={`${demo.circleDemo} ${colors.shadowSheet} ${colors.colorMineshaft800}`}>sheet</div>
  <div className={`${demo.circleDemo} ${colors.shadowDrawer} ${colors.colorMineshaft800}`}>drawer</div>
  <div className={`${demo.circleDemo} ${colors.shadowDialog} ${colors.colorMineshaft800}`}>dialog</div>
  <div className={demo.clear10}></div>

  <h3>Icons</h3>
  <hr></hr>

    &nbsp;A
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAdd}`} title="Add"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddCircle}`} title="AddCircle"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddCircleFilled}`} title="AddCircleFilled"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddCircleFilledLight}`} title="AddCircleFilledLight"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddCircleLight}`} title="AddCircleLight"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddLight}`} title="AddLight"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddLocation}`} title="AddLocation"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddLocation2}`} title="AddLocation2"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddLocationFilled}`} title="AddLocationFilled"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddLocationFilledLight}`} title="AddLocationFilledLight"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddLocationLight}`} title="AddLocationLight"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddressbook}`} title="Addressbook"></div>
    <div className={`${demo.demoIcon} ${demo.demoIconAddressbookLight}`} title="AddressbookLight"></div>
    <div className={demo.clear5}></div>

    &nbsp;B
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBangkokBank}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBank}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBellLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBellWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBellWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBHIMUPI}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBin}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBinLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBoletoBancario}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmark}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkAdd}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkAddFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkAddFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkAddLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBookmarkLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBoxes}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBoxesLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBubblePin}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBubblePinFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBubblePinLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBuilding}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBuildingLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBulb}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBulbFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBulbFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBulbLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBusiness}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBusinessFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBusinessFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconBusinessLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;C
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCalendar}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCalendarLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCamera}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCameraLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCash}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCashLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCaution}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCautionLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconChange}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconChangeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconChart}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconChartLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCheckbox}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCheckboxChecked}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCheckboxLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconChest}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconChestLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconClose}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconClose2}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconClose2Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCloseLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCloudUpload}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCloudUploadFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCloudUploadFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCloudUploadLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCompany}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCompanyLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCompass}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCompassLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconContactbook}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconContactbookLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconConversation}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconConversationFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconConversationLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCopy}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCopyLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCreditCard}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCreditCardAdd}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCreditCardAddLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCreditCardLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCS}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCSLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconCVV}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;D
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDashboard}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDashboardLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDelete}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDeleteFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDeleteFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDeleteLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDeleteStop}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDeletestopFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDeleteStopLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDetails}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDetailsLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDiscount}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDiscountLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDiscountPolygon}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDiscountPolygonFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDiscountPolygonFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDiscountPolygonLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDown}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDownArrow}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDownArrowLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDownTriangle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDriverKitLalamove}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDriverKitLalamoveLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDriverKitUncleD}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDriverKitUncleDLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDrivers}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconDriversLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;E
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconEdit}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconEdit2}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconEdit2Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconEditLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconElo}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconEmail}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconEmailLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;F
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFacebook}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFacebookColored}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFall}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFallLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFAQ}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFAQLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFavorite}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFavoriteFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFavoriteLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFilter}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFilterLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFilterWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconFilterWithBadgeLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;G
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGallery}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGalleryLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGCash}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGift}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGiftFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGiftFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGiftLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGlobal}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGlobalLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGoogle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconGoogleColored}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;H
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHandshake}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHandshakeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHelp}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHelpLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHiper}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHipercard}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHistory}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHistoryLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHome}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconHomeLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;I
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconInfo}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconInfoFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconInfoLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconInvisibleFilled}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;J
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconJCB}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;K
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconKasikornBank}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconKey}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconKeyLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconKrungsriBank}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconKrungthaiBank}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;L
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLalamove}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLalamoveColored}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLanguage}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLanguageLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLeft}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLeftArrow}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLeftArrowLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLeftLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLeftTriangle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLocationPin}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLocationPinLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLocator}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLock}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLockLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLogin}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconLoginLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;M
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMaestrocard}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMandiriClickpay}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMap}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMastercard}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMembership}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMembership2}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMembership2Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMembership3}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMembership3Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMembershipLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMenu}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMenuLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMenuWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMenuWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageCircle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageCircleLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageCircleWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageCircleWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageExclamationCircle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageExclamationCircleLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageExclamationCircleWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageExclamationCircleWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageSquare}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageSquareLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageSquareWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMessageSquareWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMissions}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMidstop}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMissionsLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconMomo}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;N
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNavigation}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNavigationFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNavigationLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNotifications}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNotificationsLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNotificationsWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconNotificationsWithBadgeLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;O
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOnlinePaymentDesktop}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOnlinePaymentDesktopLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOnlinePaymentPhone}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOnlinePaymentPhoneLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOnOff}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOnOffLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOptionsHorizontal}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOptionsVertical}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOrder}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOrderLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOvercharge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconOverchargeLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;P
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconParcel}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconParcelLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPath}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPathLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPayMe}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPermataBank}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonal}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalCircle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalCircleFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalCircleFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalCircleLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPersonalLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPickup}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPin}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPinFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPinLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPODFailed}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPODSuccess}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPricing}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPricingLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPromoCode}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPromoCodeAdd}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPromoCodeAddLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPromoCodeFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconPromoCodeLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;R
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRadio}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRadioLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRadioSelected}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRadioSelectedFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRadioSelectedLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRates}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRatesLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconReceipt}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconReceiptLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconReceive}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconReceiveLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRefreshHorizontal}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRefreshHorizontalLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRefreshVertical}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRefreshVerticalLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRemarks}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRemarksLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRemarksWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRemarksWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRemove}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRemoveLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconReroute}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRerouteLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRewards}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRewards2}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRewards2Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRewardsFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRewardsLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRightArrow}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRightArrowLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRightLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRightTriangle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRise}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconRiseLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;S
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSearch}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSearchLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSend}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSendLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSettings}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSettingsLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSettingsWithBadge}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSettingsWithBadgeLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconShare}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconShare2}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconShare2Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconShareLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSiamCommercialBank}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSignature}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSignatureLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSound}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSoundLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSoundMuted}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSoundMutedLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSpeaker}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSpeakerLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStar}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStarFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStarLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStickerLalamove}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStickerLalamoveLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStickerUncleD}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStickerUncleDLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStop}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconStopLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconSubtractFilledLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;T
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTaxInvoice}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTaxInvoiceLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTel}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTelLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTerms}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTermsLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTescoLotus}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTick}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTickCircle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTickCircleFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTickCircleFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTickCircleLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTickLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTimer}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTimer2}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTimer2Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTimer3}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTimer3Light}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconTimerLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconToolkit}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconToolkitLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconToTop}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconToTopLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;U
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUncleD}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUnion}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUnionPay}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUp}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUpArrow}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUpArrowLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUpLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUpload}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUploadLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconUpTriangle}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;V
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVehicle}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVehicleLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVideo}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVideoFilled}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVideoLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVisa}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVisible}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVisibleFilledLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVisibleLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVoice}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconVoiceLight}`}></div>
    <div className={demo.clear5}></div>

    &nbsp;W
    <div className={demo.clear}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWait}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWaitLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWallet}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWalletAdd}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWalletAddLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWalletLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWarn}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWarnLight}`}></div>
    <div className={`${demo.demoIcon} ${demo.demoIconWeChatPay}`}></div>
    <div className={demo.clear5}></div>

    <div className={demo.clear10}></div>

    <h3>Snackbars</h3>
    <hr></hr>
    <div className={demo.clear10}></div>
    <div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarInfo} ${snackbars.sticky}`}>
        <div className={snackbars.snackbarContent}>A neutral thing happened. (sticky)</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarWarning} ${snackbars.sticky}`}>
        <div className={snackbars.snackbarContent}>A warning about a thing. (sticky)</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarError} ${snackbars.sticky}`}>
        <div className={snackbars.snackbarContent}>A bad thing happened. (sticky)</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarSuccess} ${snackbars.sticky}`}>
        <div className={snackbars.snackbarContent}>A good thing happened. (sticky)</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarInfo}`}>
        <div className={snackbars.snackbarContent}>A neutral thing happened.</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarInfo}`}>
        <div className={snackbars.snackbarContent}>A neutral thing happened.</div>
        <a className={`${snackbars.snackbarAction}`}>Action</a>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarLong} ${snackbars.snackbarInfo}`}>
        <div className={snackbars.snackbarContent}>A neutral thing happened.</div>
        <a className={`${snackbars.snackbarAction}`}>A really long action button</a>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarWarning}`}>
        <div className={`${snackbars.snackbarContent} ${snackbars.warningIcon}`}>A warning about a thing.</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarWarning}`}>
        <div className={`${snackbars.snackbarContent} ${snackbars.warningIcon}`}>A warning about a thing.</div>
        <div className={`${snackbars.snackbarAction}`}>Action</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarLong} ${snackbars.snackbarWarning}`}>
        <div className={`${snackbars.snackbarContent}`}>A warning about a thing.</div>
        <div className={`${snackbars.snackbarAction}`}>A really long action button</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarError}`}>
        <div className={`${snackbars.snackbarContent} ${snackbars.errorIcon}`}>A bad thing happened.</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarError}`}>
        <div className={`${snackbars.snackbarContent} ${snackbars.errorIcon}`}>A bad thing happened.</div>
        <div className={`${snackbars.snackbarAction}`}>Action</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarLong} ${snackbars.snackbarError}`}>
        <div className={`${snackbars.snackbarContent}`}>A bad thing happened.</div>
        <div className={`${snackbars.snackbarAction}`}>A really long action button</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarSuccess}`}>
        <div className={`${snackbars.snackbarContent} ${snackbars.successIcon}`}>A good thing happened.</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarShort} ${snackbars.snackbarSuccess}`}>
        <div className={`${snackbars.snackbarContent} ${snackbars.successIcon}`}>A good thing happened.</div>
        <div className={`${snackbars.snackbarAction}`}>Action</div>
      </div>
      <div className={`${snackbars.snackbar} ${snackbars.snackbarLong} ${snackbars.snackbarSuccess}`}>
        <div className={`${snackbars.snackbarContent}`}>A good thing happened.</div>
        <div className={`${snackbars.snackbarAction}`}>A really long action button</div>
      </div>
    </div>
    <div className={demo.clear10}></div>

    <h3>Buttons</h3>
    <hr></hr>
    <button className={`${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonFixed} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Primary Fixed Large Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonFixed} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonText}`}>
      Primary Fixed Large Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonFixed} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Primary Fixed Small Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <div className={demo.row}>
    <button className={`${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonFixed} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonText}`}>
      Primary Fixed Small Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonIntrinsic} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonText}`}>
      Primary Intrinsic Large Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonIntrinsic} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Primary Intrinsic Large Icon Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonText}`}>
      Primary Intrinsic Small Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Primary Intrinsic Small Icon Button
      </div>
    </button>
    </div>
    <div className={demo.clear10}></div>

    {/* Secondary Button */}
    <button className={`${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonFixed} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Secondary Fixed Large Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonFixed} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonText}`}>
      Secondary Fixed Large Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonFixed} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Secondary Fixed Small Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonFixed} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonText}`}>
      Secondary Fixed Small Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <div className={demo.row}>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonIntrinsic} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonText}`}>
      Secondary Intrinsic Large Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonIntrinsic} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Secondary Intrinsic Large Icon Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonText}`}>
      Secondary Intrinsic Small Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Secondary Intrinsic Small Icon Button
      </div>
    </button>
    </div>
    <div className={demo.clear10}></div>

    {/* Tertiary Button */}
    <button className={`${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonFixed} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Tertiary Fixed Large Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonFixed} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonText}`}>
      Tertiary Fixed Large Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonFixed} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Tertiary Fixed Small Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonFixed} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonText}`}>
      Tertiary Fixed Small Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <div className={demo.row}>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonIntrinsic} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonText}`}>
      Tertiary Intrinsic Large Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonIntrinsic} ${buttons.buttonLarge}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Tertiary Intrinsic Large Icon Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonText}`}>
      Tertiary Intrinsic Small Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Tertiary Intrinsic Small Icon Button
      </div>
    </button>
    </div>
    <div className={demo.clear10}></div>

     {/* Pill Button */}
    <button className={`${buttons.button} ${buttons.buttonPill} ${buttons.buttonFixed}`}>
      <div className={`${buttons.buttonText}`}>
      Pill Fixed Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <button className={`${buttons.button} ${buttons.buttonPill} ${buttons.buttonFixed}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Pill Fixed Icon Button
      </div>
    </button>
    <div className={demo.clear10}></div>
    <div className={demo.row}>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonPill} ${buttons.buttonIntrinsic}`}>
      <div className={`${buttons.buttonText}`}>
      Pill Intrinsic Button
      </div>
    </button>
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonPill} ${buttons.buttonIntrinsic}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Pill Intrinsic Icon Button
      </div>
    </button>
    {/* Icon Button */}
    <button className={`${demo.left} ${buttons.button} ${buttons.buttonAsIcon}`}>
    <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
    </button> 
    </div>
    <div className={demo.clear10}></div>
   
    {/* Disabled Buttons */}
    <div className={demo.row}>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Primary Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Secondary Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonIntrinsic} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Tertiary Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonPill} ${buttons.buttonIntrinsic}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Pill Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonAsIcon}`}>
    <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
    </button>
    </div>
    <div className={demo.clear10}></div>

    {/* Truncated Buttons */}
    <div className={demo.row}>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonPrimary} ${buttons.buttonShort} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Primary Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonSecondary} ${buttons.buttonShort} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Secondary Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonTertiary} ${buttons.buttonShort} ${buttons.buttonSmall}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Tertiary Disabled Button
      </div>
    </button>
    <button disabled={true} className={`${demo.left} ${buttons.button} ${buttons.buttonPill} ${buttons.buttonShort}`}>
      <div className={`${buttons.buttonIcon} ${icons.iconTel}`} />
      <div className={`${buttons.buttonText}`}>
      Pill Disabled Button
      </div>
    </button>
    </div>
    <div className={demo.clear10}></div>

  </div>
}