import styled from 'styled-components';

/**
 * Flex Box Component
 * 
 * @param {boolean} props.fill Will component fill parent element
 * @param {string} props.align Sets "align-items"
 * @param {string} props.justify Sets "justify-content"
 * @param {string} props.direction Sets "flex-direction"
 * @param {string} props.alignContent Sets "align-content"
 * @param {string} props.gap Sets "gap"
 * @param {boolean} props.center Will component's children be centered
 */
const Flex = styled.div `
  display:flex;
  ${props=>{
    let {fill, align, a, justify, j, wrap, direction, d, alignContent, ac, gap, g, center, grow, shrink} = props;

    align=align||a;
    justify=justify||j;
    direction=direction||d;
    alignContent=alignContent||ac;
    gap=gap||g;

    return `
      ${grow?`flex-grow:${grow?1:0};`:''}
      ${shrink?`flex-shrink:${shrink?1:0};`:''}
      ${fill?`
        width:inherit;
        height:inherit;

      `:''}
      ${center?`
        align-items:center;
        justify-content:center;
      `:''}
      ${align?`align-items:${align};`:''}
      ${justify?`justify-content:${justify};`:''}
      ${alignContent?`align-content:${alignContent};`:''}
      ${wrap?`flex-wrap:${wrap};`:''}
      ${direction?`flex-direction:${direction};`:''}
      ${(gap?(wrap!=='wrap'?`
        & > *:not(:last-child){${direction==='column'?`margin-bottom:${gap}`:`margin-right:${gap}`};}
      `:`gap:${gap};`):'')}
    `
  }}
` 

export default Flex; 