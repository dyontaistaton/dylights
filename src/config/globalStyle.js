import {createGlobalStyle} from 'styled-components'; 
import config from '../config/site.json'
import Cookies from '../assets/cookies.jpg' 


const GlobalStyle = createGlobalStyle`
  body {
    font-family:${config.fonts[0]},system-ui, Helvetica, sans-serif;
    line-height:1.3; 
  }

  // Setting Element Fonts
  h1,h2,h3,h4,h5,h6{
    font-family:${config.fonts[1]},system-ui, Helvetica, sans-serif;
    font-weight:bold; 
  }

  // Removing Link Decorations
  a{
    text-decoration:none;
  }
  
  *{
    // Removing Margins From All Elements
    margin:0;

    // Removes Scroll Bar From ALl Elements
    ::-webkit-scrollbar{
      display:none;
    }
  }

  #root {
    // Gives Spacer Margin to Elements That Are After Another Element
    *{
      &~h1,&~h2,&~h3,&~h3,&~h4,&~h5,&~h6,&~p{
        margin-block-start:0.5em;
      }
    }

    // Clamps Page Content To Fit Within Page Wrappers
    overflow: hidden;
  }

  //Element Tool Tip
  [data-title]{
    position: relative;
    
    // Make The Tooltip Visible
    &:hover:after{
      opacity: 1;
      transition: all 0.1s ease 0.5s;
      visibility: visible;
    }
    
    // Tooltip Element
    &:after{
      font-family: ${config.fonts[1]};
      content: attr(data-title);
      position: absolute;
      top: 111%;
      left: -100%;
      right: -100%;
      height: fit-content;
      max-width: max-content;
      margin: auto;
      padding: 4px;
      font-weight:bold;
      color: ${config.colors[0]};
      white-space: nowrap;
      background-color: ${config.colors[3]};
      border-radius: 5px;
      border:dashed ${config.colors[0]}bf 3px;
      opacity: 0;
      z-index: 99999;
      visibility: hidden;
    }
  }

  // Contrasting Text 
  [data-contrasted] {
    *{
      background: inherit;
    }
    h1,h2,h3,h4,h5,h6{
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      filter: invert(1) grayscale(1) contrast(9);
    }
  }

  // Content Sizing
  ${config.sizes.headers.reduce((prev,cur,i)=>{return prev+`h${i+1}{font-size:${cur};}\n`},'')}
  small, h6, sup{font-size:${config.sizes.small};}
  p{font-size:${config.sizes.p};} 
`

export default GlobalStyle;
