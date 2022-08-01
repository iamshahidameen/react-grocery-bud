import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ name, deleteItem }) => {
  return (
    <>
      <article className="grocery-item">
        <p className="title">{name}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn">
            <FaEdit />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => deleteItem(name)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    </>
  );
};

export default List;
