import {createGlobalStyle} from 'styled-components'; 
import config from '../config/site.json'
import Cookies from '../assets/cookies.jpg' 


const GlobalStyle = createGlobalStyle`
  body {
    background-image:url(${Cookies});
    background-position:center;
    font-family:${config.fonts[1]},system-ui, Helvetica, sans-serif;
    line-height:1.3; 
  }

  // Setting Element Fonts
  h1,h2,h3,h4,h5,h6{
    font-family:${config.fonts[1]},system-ui, Helvetica, sans-serif;
    font-weight:bold; 
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
      &+h1,&+h2,&+h3,&+h3,&+h4,&+h5,&+h6,&+p{
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
      font-family: ${config.fonts[0]};
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

  // Buttons
  button {
    cursor: pointer;
    display:block;
    padding:0.6em 1.3em; 
    background-color:white;
    outline:none;
    border:none;
    border-radius:0.6em;
    box-sizing:border-box;
    transition:0.3s ease;
    will-change:transform;
    svg{
      width:55%;
      height:55%;
    }
    & > *{
      text-align:center;
      text-transform:uppercase;
      letter-spacing:5px;
      text-align:center;
      font-weight:bolder;
    }
    :hover{
      transform:scale(1.02);
    }
    :active{
      transform:scale(1.01);
      transition:20ms ease;
      background-color:${config.colors[4]};
    } 
    // Disabled Button
    &[disabled]{
      background:none;
      :hover:before{
      }
      :before{
        content:'';
        position:absolute;
        pointer-events:none;
        transform-origin:center;
        top:0;
        right:0;
        left:0;
        bottom:0;
        margin:auto;
        border-radius:3px;
        border:none;
        display:block;
        width:70%;
        height:10%;
        z-index:10;
      }
    }
  }

  // Inputs ( Fields )
  input, textarea, select{
    padding:15px;
    border:solid 1px ${config.colors[5]}30;
    outline:none;
    width:313px;
    max-width:100%;
    box-sizing:border-box;
    border-radius:10px; 
    font-size:${config.sizes.p};
    font-family:${config.fonts[0]};
    transition: 0.3s ease-in-out; 

    &:focus{
      outline:none;
    }

    // Hide The Placeholder
    ::placeholder{
      color:transparent;
    }

    // Autofill
    &:-webkit-autofill {
      font-size:${config.sizes.p};
    }
  }

  select{
    // Right Hand Down Arrow ( IE )
    &:-ms-expand{
      display:none
    } 

    // Right Hand Down arrow ( Chrome + Firefox )
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    // Input Labels
    & ~ label {
      will-change:transform,color,bottom,top,height;
      pointer-events:none;
      position:absolute;
      left:15px;
      color:${config.colors[5]}a3;
      height: ${config.sizes.headers[2].replace('px', '')+11}px;
      margin:auto;
      transition:ease-in-out 0.3s, color ease 0.2s;

      // Text Container
      h4{
        transition:inherit;
      }
    }

    // When The Select Had An Valid Option
    &:not(:invalid){
      border-color:${config.colors[4]}8a;

      & ~ label {
        top:2px;
        color:${config.colors[4]};
        bottom:calc(100% - 21px);
        left:7px;
        height: ${(config.sizes.headers[3].replace('px','')+11) * .40}px;
        h4{
          font-size:calc(${config.sizes.headers[3]} * .40);
        }
      }
    }
  }

  // Only Input & Textareas
  input, textarea{
    & ~ label {
      will-change:transform,color,bottom,top,height,bottom;
      pointer-events:none;
      position:absolute;
      left:15px;
      color:${config.colors[5]}a3;
      height: ${config.sizes.headers[2].replace('px', '')+11}px;
      margin:auto;
      transition:ease-in-out 0.3s, color ease 0.2s;

      // Text Container
      h4{
        transition:inherit;
      }
    }

    &:focus, &:not(:placeholder-shown){
      border-color:${config.colors[4]}8a;

      & ~ label {
        color:${config.colors[4]};
        bottom:calc(100% - 21px);
        left:7px;
        height: ${(config.sizes.headers[3].replace('px','')+11) * .40}px;
        h4{
          font-size:calc(${config.sizes.headers[3]} * .40);
        }
      }
    }
  }

  input{ 
    &:focus, &:not(:placeholder-shown){
      & ~ label {
        top:3px;
      }
    }

    // File Inputs
    &[type=file]{
      cursor:pointer;
      color:${config.colors[5]};

      // Hide Default Upload Button
      &::-webkit-file-upload-button{
        visibility:hidden;
        margin-right:-102px;
        margin-top:4px;
      }

      // Make Placeholder Color Dark Black
      &::placeholder{
        color:${config.colors[5]};
      }
    } 
  }

  input, select {
    height:60px;
    & ~ label {
      top:0px;
      bottom:0;
    }
  }

  textarea {
    padding-top:20px;
    transition:ease-in-out 0.3s, padding-top 0s; 
    height:180px;
    resize:vertical; 
    & ~ label {
      top:13px;
      bottom: calc(100% - 49px);
    }

    &:focus, &:not(:placeholder-shown){
      & ~ label {
        top:3px;
      }
    }
  }

  // Tables
  table:not(:empty){
    border-collapse:collapse;

    // Adding Borders Between Sides Only
    th:first-child:not(:only-child),th:not(:last-child),
    td:first-child:not(:only-child),td:not(:last-child){
      border-right:#c7c7c7 1px solid;
    }

    // Add Padding To Table Cells
    td{
      padding: 0 5px;
    }

    tbody{
      td{
        margin:0 -40px;
      }

      // Add Border Between Cell Row
      tr:not(:last-child) td{
        border-bottom:#c7c7c7 1px solid; 
      }
    }

  }
`

export default GlobalStyle;
