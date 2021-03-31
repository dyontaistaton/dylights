import styled from 'styled-components';
import config from '../../../config/site.json';

const Style = styled.div `
  position:relative;
  width:313px;
  max-width:100%;
  ${props=>props.fill&&`width:100%;`} 
  ${props=>props.width&&`width:${props.width};`}

  & ~ & {
    margin-top:10px;
    ${props=>props.noSpacing===true&&`margin-top:0;`}

  }

  // Inputs ( Fields )
  input, textarea, select{
    padding:15px;
    border:solid 1px ${config.colors[5]}30;
    background-color:${config.colors[4]};
    outline:none;
    width:100%;
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

    // Disabled
    &[disabled]{
      border-color:${config.colors[4]}; 

      // Field Label
      ~ label{
        color:${config.colors[4]};
      }

      // Make Placeholder Color Gray
      &::placeholder{
        color:${config.colors[4]};
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
      border-color:${config.colors[5]}8a;

      & ~ label {
        color:${config.colors[5]};
        bottom:calc(100% - 21px);
        left:7px;
        height: ${(config.sizes.headers[3].replace('px','')+11) * .40}px;
        h4{
          font-size:calc(${config.sizes.headers[3]} * .40);
        }
      }
    }
  }

  input, select {
    height:60px;
    & ~ label {
      top:-1px;
      bottom:0;
    }
  }
` 

export default Style;