import React from 'react'
import styled from 'styled-components';
import { useTable } from 'react-table';
import PropTypes from 'prop-types'

export const Style = styled.div `

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
    <Style>
      <table {...getTableProps()}>
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
      </table>
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