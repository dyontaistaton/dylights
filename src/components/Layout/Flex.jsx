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
    const {fill, align, a, justify, j, wrap, direction, d, alignContent, ac, gap, g, center} = props;
    return `
      ${fill?`
        width:inherit;
        height:inherit;

      `:''}
      ${center?`
        align-items:center;
        justify-content:center;
      `:''}
      ${(align||a)?`align-items:${align||a};`:''}
      ${(justify||j)?`justify-content:${justify||j};`:''}
      ${(alignContent||ac)?`align-content:${alignContent||ac};`:''}
      ${wrap?`flex-wrap:${wrap};`:''}
      ${(direction||d)?`flex-direction:${direction||d};`:''}
      ${(gap||g)?`gap:${gap||g};`:''}
    `
  }}
`

export default Flex