import React from 'react'
import styled from 'styled-components';
import {Flex} from '../../../Layout';
import config from '../../../../config/site.json'
import Tilt from 'react-parallax-tilt'

export const Style = styled.div` 
  position:relative;
  width:350px;
  height:350px;
  cursor: pointer;

  // Tilt Element
  > div {

    // Wrapper For Filter
    > div { 
      filter:url("#goo"); 
    }
    
    // Cookie Image
    > figure{ 
      background-image:url("https://images.squarespace-cdn.com/content/v1/5e7cadfe1e5cbd08267c630d/1587414678149-7BLWIPRP8ACLJYKFOH8H/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm-jXTMTrB0PefGktXgwZ9-ke3MC6jkwzRBcsdm5TVy4ARQWVfRtMAsNtzm-EqKefv/THE+PLEASE+%26+THANK+YOU+COOKIE");
      background-size:cover;
      background-position:center;
      transition:ease 300ms; 
      height:100%;
      width:100%;
      top:0;
      right:0;
      left:0;
      bottom:0;
      will-change:width height;
      transform:translateZ(20px);
    }

    // Cookie Name Ring
    > div > svg{ 
      top:-35px;
      right:-35px;
      left:-35px;
      bottom:-35px;
      opacity:0;
      pointer-events:none;
      will-change:opacity;
      transform:rotateZ(-30deg);
      transform-origin:center;
      transition:ease 200ms; 

      text {
        opacity:0;
        transition:ease-out 1s;
        fill:${config.colors[1]};
        text-transform:uppercase;
      }
    } 

    // Center Both; Name Ring & Cookie Image
    > figure, > svg{
      position:absolute; 
      margin:auto;
    }

    // Price Tag
    > div > ${Flex}{
      position:absolute;
      height:31%;
      width:31%;
      bottom:11%;
      right:11%;
      color:${config.colors[1]}; 
      background-color:${config.colors[0]};
      border-radius:100%;
      transform:scale(0);
      opacity:0;
      will-change:transform opacity;
      transition:ease-out 130ms; 
      transform:translateZ(20px); 

      // Price Text Header
      > h2{
        margin: 8px 5px 0 0;
        font-family:${'Fjalla One'};
      }
    }
  }

  &:hover{

    // Tilt Element
    > div {

      // Cookie Image 
      > figure{
        width:65%;
        height:65%;
      }

      // Cookie Name Ring 
      > div > svg{
        top:0;
        right:0;
        left:0;
        bottom:0;
        opacity:1;
        transform:rotateZ(120deg);

        text{
          opacity:1;
          transition:ease 300ms;
        }
      }

      // #price-tag Of Cookie
      > div > ${Flex}{
        bottom:-10px;
        right:-10px;
        transform:scale(1);
        opacity:1;
      }
    }

  }

  &:active{

  }
`

const Cookie = props => {
  const {product} = props;
  const {name, price, amount, type, image} = product;

  return (
    <Style>
      <Tilt
        tiltReverse={true}
        style={{transformStyle:'preserve-3d'}}
        tiltMaxAngleX='5'
        tiltMaxAngleY='10'
      >
        <figure style={{backgroundImage:`url(${image})`}}/> 
        <div>
          <svg viewBox="0 0 483 483" id='text-svg'>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
            <path stroke={config.colors[0]} stroke-width="79" id="textcircle" fill='none' d="M241.5 443.5C353.062 443.5 443.5 353.062 443.5 241.5C443.5 129.938 353.062 39.5 241.5 39.5C129.938 39.5 39.5 129.938 39.5 241.5C39.5 353.062 129.938 443.5 241.5 443.5Z"/> 
            <text id='name-text' dy="21" dx="100%" 
              textAnchor='end'
              fontSize={config.sizes.headers[1]} 
              fontWeight='bold' 
              fontFamily={'Fjalla One'}
              letterSpacing='4'
              textLength='spacing'
              fill={config.colors[1]}
            >
              <textPath xlinkHref="#textcircle"> 
                {amount}ct - {name}
              </textPath> 
            </text>
            <text id='name-text' dy="21" dx="100%" 
              textAnchor='end'
              fontSize={config.sizes.headers[1]} 
              fontWeight='bold' 
              fontFamily={'Fjalla One'}
              letterSpacing='4'
              textLength='spacing'
              rotate='180' 
              fill={config.colors[0]}
            >
              <textPath 
                startOffset='45%' 
                xlinkHref="#textcircle"
              >
                {type&&type.reverse()}
              </textPath> 
            </text>
            
          </svg> 
          <Flex id='price-tag' center>
            <h2>${price||0}</h2>
          </Flex>
        </div>
      </Tilt>
    </Style>
  )
}

export default Cookie;