import React from 'react';

const Input = ({ dataForm, handleChange, id, text, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={dataForm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
