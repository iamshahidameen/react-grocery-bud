import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ id, name, deleteItem, editItem }) => {
  return (
    <>
      <article className="grocery-item" id={id}>
        <p className="title">{name}</p>
        <div className="btn-container">
          <button
            type="button"
            className="edit-btn"
            onClick={() => editItem(id)}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => deleteItem(id, name)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    </>
  );
};

export default List;
