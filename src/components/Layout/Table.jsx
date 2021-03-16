import React from 'react'
import styled from 'styled-components';
import { useTable } from 'react-table';
import PropTypes from 'prop-types'

export const Style = styled.table `
  &:not(:empty){
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

const Table = props => {
  const {columns, data} = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({columns,data});
  return (
    <Style {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Style>
  )
}

Table.propTypes = { 

  /** Column Header Data, Must Be Created With React.memo() */
  columns: PropTypes.any,
  
  /** Memorized Table Data, Must Be Created With React.memo() */
  data: PropTypes.any
}

export default Table;