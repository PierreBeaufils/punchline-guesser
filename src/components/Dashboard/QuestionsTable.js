import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';
import { baseURL } from 'src/config';
import axios from 'axios';
import { useTable, useSortBy, useFilters } from 'react-table';

const QuestionsTable = ({
  data,
}) => {
  const [questionInput, setQuestionInput] = useState('');
  const [artistInput, setArtistInput] = useState('');
  const [message, setMessage] = useState('');
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
    setFilter,
  } = useTable({
    columns,
    data,
  }, useFilters, useSortBy);

  const handleQuestionFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('question', value);
    setQuestionInput(value);
  };

  const handleArtistFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('good_answer.name', value);
    setArtistInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    axios.post(`${baseURL}/question`, form)
      .then((res) => {
        setMessage(res.data);
      });
  };

  return (
    <>
      <form className="question-form" onSubmit={handleSubmit}>
        <div className="question-form-field punchline-div">
          <label htmlFor="questionName">Punchline
            <input
              name="questionName"
              className="dashboard-input"
              value={questionInput}
              onChange={handleQuestionFilterChange}
              placeholder="Punchline"
              required
            />
          </label>
        </div>
        <div className="question-form-field artist-div">
          <label htmlFor="answerName">Artiste
            <input
              name="answerName"
              className="dashboard-input artist-input"
              value={artistInput}
              onChange={handleArtistFilterChange}
              placeholder="Artiste"
              required
            />
          </label>
        </div>
        <div className="question-form-field difficulty-div">
          <label htmlFor="difficultyId">Difficulté
            <select name="difficultyId" className="dashboard-input" required>
              <option value="1">Facile</option>
              <option value="2">Intermédiaire</option>
              <option value="3">Difficile</option>
            </select>
          </label>
        </div>
        <button type="submit">Ajouter une question</button>
      </form>

      {message && (<div className="question-form-message">{message}</div>)}

      <div className="rows-results">{rows.length} résultats</div>
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
