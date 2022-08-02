import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ id, name, deleteItem }) => {
  return (
    <>
      <article className="grocery-item" id={id}>
        <p className="title">{name}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn">
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
