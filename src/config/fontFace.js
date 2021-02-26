import {createGlobalStyle} from 'styled-components';
import config from '../config/site.json';

const FontFace = createGlobalStyle `
  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Regular.eot');
    src: url('../assets/Karla/Karla-Regular.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Regular.woff2') format('woff2'),
        url('../assets/Karla/Karla-Regular.woff') format('woff'),
        url('../assets/Karla/Karla-Regular.ttf') format('truetype'),
        url('../assets/Karla/Karla-Regular.svg#Karla-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Italic.eot');
    src: url('../assets/Karla/Karla-Italic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Italic.woff2') format('woff2'),
        url('../assets/Karla/Karla-Italic.woff') format('woff'),
        url('../assets/Karla/Karla-Italic.ttf') format('truetype'),
        url('../assets/Karla/Karla-Italic.svg#Karla-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-ExtraBold.eot');
    src: url('../assets/Karla/Karla-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-ExtraBold.woff2') format('woff2'),
        url('../assets/Karla/Karla-ExtraBold.woff') format('woff'),
        url('../assets/Karla/Karla-ExtraBold.ttf') format('truetype'),
        url('../assets/Karla/Karla-ExtraBold.svg#Karla-ExtraBold') format('svg');
    font-weight: 800;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Bold.eot');
    src: url('../assets/Karla/Karla-Bold.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Bold.woff2') format('woff2'),
        url('../assets/Karla/Karla-Bold.woff') format('woff'),
        url('../assets/Karla/Karla-Bold.ttf') format('truetype'),
        url('../assets/Karla/Karla-Bold.svg#Karla-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-ExtraBoldItalic.eot');
    src: url('../assets/Karla/Karla-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-ExtraBoldItalic.woff2') format('woff2'),
        url('../assets/Karla/Karla-ExtraBoldItalic.woff') format('woff'),
        url('../assets/Karla/Karla-ExtraBoldItalic.ttf') format('truetype'),
        url('../assets/Karla/Karla-ExtraBoldItalic.svg#Karla-ExtraBoldItalic') format('svg');
    font-weight: 800;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-BoldItalic.eot');
    src: url('../assets/Karla/Karla-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-BoldItalic.woff2') format('woff2'),
        url('../assets/Karla/Karla-BoldItalic.woff') format('woff'),
        url('../assets/Karla/Karla-BoldItalic.ttf') format('truetype'),
        url('../assets/Karla/Karla-BoldItalic.svg#Karla-BoldItalic') format('svg');
    font-weight: bold;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-ExtraLightItalic.eot');
    src: url('../assets/Karla/Karla-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-ExtraLightItalic.woff2') format('woff2'),
        url('../assets/Karla/Karla-ExtraLightItalic.woff') format('woff'),
        url('../assets/Karla/Karla-ExtraLightItalic.ttf') format('truetype'),
        url('../assets/Karla/Karla-ExtraLightItalic.svg#Karla-ExtraLightItalic') format('svg');
    font-weight: 200;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-ExtraLight.eot');
    src: url('../assets/Karla/Karla-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-ExtraLight.woff2') format('woff2'),
        url('../assets/Karla/Karla-ExtraLight.woff') format('woff'),
        url('../assets/Karla/Karla-ExtraLight.ttf') format('truetype'),
        url('../assets/Karla/Karla-ExtraLight.svg#Karla-ExtraLight') format('svg');
    font-weight: 200;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-MediumItalic.eot');
    src: url('../assets/Karla/Karla-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-MediumItalic.woff2') format('woff2'),
        url('../assets/Karla/Karla-MediumItalic.woff') format('woff'),
        url('../assets/Karla/Karla-MediumItalic.ttf') format('truetype'),
        url('../assets/Karla/Karla-MediumItalic.svg#Karla-MediumItalic') format('svg');
    font-weight: 500;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-LightItalic.eot');
    src: url('../assets/Karla/Karla-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-LightItalic.woff2') format('woff2'),
        url('../assets/Karla/Karla-LightItalic.woff') format('woff'),
        url('../assets/Karla/Karla-LightItalic.ttf') format('truetype'),
        url('../assets/Karla/Karla-LightItalic.svg#Karla-LightItalic') format('svg');
    font-weight: 300;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Light.eot');
    src: url('../assets/Karla/Karla-Light.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Light.woff2') format('woff2'),
        url('../assets/Karla/Karla-Light.woff') format('woff'),
        url('../assets/Karla/Karla-Light.ttf') format('truetype'),
        url('../assets/Karla/Karla-Light.svg#Karla-Light') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Medium.eot');
    src: url('../assets/Karla/Karla-Medium.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Medium.woff2') format('woff2'),
        url('../assets/Karla/Karla-Medium.woff') format('woff'),
        url('../assets/Karla/Karla-Medium.ttf') format('truetype'),
        url('../assets/Karla/Karla-Medium.svg#Karla-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-SemiBold.eot');
    src: url('../assets/Karla/Karla-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-SemiBold.woff2') format('woff2'),
        url('../assets/Karla/Karla-SemiBold.woff') format('woff'),
        url('../assets/Karla/Karla-SemiBold.ttf') format('truetype'),
        url('../assets/Karla/Karla-SemiBold.svg#Karla-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Italic_1.eot');
    src: url('../assets/Karla/Karla-Italic_1.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Italic_1.woff2') format('woff2'),
        url('../assets/Karla/Karla-Italic_1.woff') format('woff'),
        url('../assets/Karla/Karla-Italic_1.ttf') format('truetype'),
        url('../assets/Karla/Karla-Italic_1.svg#Karla-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-Regular_1.eot');
    src: url('../assets/Karla/Karla-Regular_1.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-Regular_1.woff2') format('woff2'),
        url('../assets/Karla/Karla-Regular_1.woff') format('woff'),
        url('../assets/Karla/Karla-Regular_1.ttf') format('truetype'),
        url('../assets/Karla/Karla-Regular_1.svg#Karla-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${config.fonts[0]};
    src: url('../assets/Karla/Karla-SemiBoldItalic.eot');
    src: url('../assets/Karla/Karla-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('../assets/Karla/Karla-SemiBoldItalic.woff2') format('woff2'),
        url('../assets/Karla/Karla-SemiBoldItalic.woff') format('woff'),
        url('../assets/Karla/Karla-SemiBoldItalic.ttf') format('truetype'),
        url('../assets/Karla/Karla-SemiBoldItalic.svg#Karla-SemiBoldItalic') format('svg');
    font-weight: 600;
    font-style: italic;
    font-display: fallback;
  }
`

export default FontFace;