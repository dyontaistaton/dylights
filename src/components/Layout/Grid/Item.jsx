import styled from 'styled-components';

const Item = styled.div `
  ${props=>{
    const {rowSpan, rs, columnSpan, cs, justify, j, align, a, rowOrder, ro, columnOrder, co} = props;
    return `
      ${(rowSpan||rs)?`grid-row: span ${rowSpan||rs};`:''}
      ${(columnSpan||cs)?`grid-column: span ${columnSpan||cs};`:''}
      ${(justify||j)?`justify-self:${justify||j};`:''}
      ${(align||a)?`align-self:${align||a};`:''}
      ${(rowOrder||ro)?`grid-row-start:${rowOrder||ro};`:''}
      ${(columnOrder||co)?`grid-column-start:${columnOrder||co};`:''}
    `
  }};
`

export default Item;
