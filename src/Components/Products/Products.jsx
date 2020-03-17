import React from "react";
import Product from "../Product/Product";
import SearchBox from '../SearchBox/SearchBox';
import { Grid } from "@material-ui/core";
import styled from 'styled-components'
import { useTable } from 'react-table'

import './Products.css';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    tbody {
        display: flex;
    }

    tr {
        display: flex;
        flex-direction: column;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            {/* <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead> */}
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function Products(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Products',
                columns: [
                    {
                        accessor: 'title',
                    },
                    {
                        accessor: 'solution',
                    },
                    {
                        accessor: 'description'
                    }
                ],
            }
        ],
        []
    )

    const data = props.items;

    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <SearchBox {...props} handleChange={props.handleChange} />
            <button style={{margin: '5%'}} onClick={props.handleGroupBy}>Group by Category</button>
            <Grid container spacing={2} justify="center">
                {props.items.map((product, index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product.id}>
                        <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
                    </Grid>
                )}
            </Grid>
            <Styles>
                <Table columns={columns} data={data} />
            </Styles>
        </div>
    )
}

export default Products;