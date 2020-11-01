import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';

import { useTable, useSortBy, useGlobalFilter } from 'react-table';

const QuestionsTable = ({
  data,
}) => {
  const [filterInput, setFilterInput] = useState('');
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Question',
        accessor: 'question',
      },
      {
        Header: 'Réponse',
        accessor: 'good_answer.name',
      },
      {
        Header: 'Difficulté',
        accessor: 'difficulty.name',
      },
    ],
    [],
  );

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // this function needs to be called for each row before getting the row props
    setGlobalFilter,
  } = useTable({
    columns,
    data,
  }, useGlobalFilter, useSortBy);

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <>
      <input
        className="dashboard-filter"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Rechercher une question"
      />
      <span className="rows-results">{rows.length} résultats</span>
      <table {...getTableProps()} className="dashboard-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="dashboard-table-header"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="dashboard-table-row"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

QuestionsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default QuestionsTable;
