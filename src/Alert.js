import React, { useEffect } from 'react';

const Alert = ({ message, type }) => {
  return (
    <>
      <p className={`alert alert-${type}`}>{message} Added to the list</p>
    </>
  );
};

export default Alert;
