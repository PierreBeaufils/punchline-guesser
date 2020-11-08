import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import axios from 'axios';
import { baseURL } from 'src/config';
import './dashboard.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#214C6E',
    width: '800px',
  },
};

Modal.setAppElement('#root');

const EditModal = ({ modalIsOpen, closeModal, question }) => {
  const handleEdit = (event) => {
    event.preventDefault();
    axios.patch(`${baseURL}/question/${question.id}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  console.log(question);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <X style={{ marginLeft: 'auto', cursor: 'pointer' }} type="button" onClick={closeModal} />
        <h2>Modifier une question</h2>
        <form className="question-form" onSubmit={handleEdit}>
          <div className="question-form-field punchline-div">
            <label htmlFor="questionName">Punchline
              <input
                name="questionName"
                className="dashboard-input"
                type="text"
                defaultValue={question.question}
                required
              />
            </label>
          </div>
          <div className="question-form-field artist-div">
            <label htmlFor="answerName">Artiste
              <input type="text" defaultValue={question.good_answer} />
            </label>
          </div>
          <div className="question-form-field difficulty-div">
            <label htmlFor="difficultyId">Difficulté
              <select name="difficultyId" className="dashboard-input" defaultValue={question.difficulty_id} required>
                <option value="1">Facile</option>
                <option value="2">Intermédiaire</option>
                <option value="3">Difficile</option>
              </select>
            </label>
          </div>
          <button type="button" onClick={closeModal}>Annuler</button>
          <button type="submit">Valider</button>
        </form>
      </Modal>
    </div>
  );
};

EditModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  question: PropTypes.object,
};

EditModal.defaultProps = {
  question: {},
};

export default EditModal;
