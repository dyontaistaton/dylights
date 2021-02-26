import styled from 'styled-components';

/**
 * Grid Component
 * @param {boolean} props.fill Will component fill parent element
 * @param {string} props.gap Sets "gap"
 * @param {string} props.customColumns Sets "grid-template-columns"
 * @param {string} props.customRows Sets "grid-template-rows"
 * @param {string} props.rows Restricts amount of rows of grid to given value
 * @param {string} props.columns Restricts amount of columns of grid to given value
 */
const Grid = styled.div `
  display:grid;
  ${props=>{
    const {fill, customColumns, cc, customRows, cr, rows, r, columns, c, gap, g} = props;
    return `
      ${fill?`
        width:100%;
        height:100%;
      `:''}
      ${(customColumns||cc)?`grid-template-columns:${customColumns||cc};`:''}
      ${(customRows||cr)?`grid-template-rows:${customRows||cr};`:''}
      ${(rows||r)?`grid-template-rows:repeat(${rows||r}, 1fr);`:''}
      ${(columns||c)?`grid-template-columns:repeat(${columns||c}, 1fr);`:''}
      ${(gap||g)?`gap:${gap||g};`:''}
    `
  }};
`

export default Grid;