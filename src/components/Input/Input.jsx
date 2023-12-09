import React from 'react';

const Input = ({
  dataForm,
  handleChange,
  id,
  placeholder,
  icon,
  type = 'text',
}) => {
  return (
    <div className="flex items-center">
      <div className="p-2 bg-sky-500 shadow-lg">
        <img className="h-5 w-5 " src={icon} alt="" />
      </div>
      <input
        className="p-1 text-slate-950"
        type={type}
        id={id}
        name={id}
        value={dataForm}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
