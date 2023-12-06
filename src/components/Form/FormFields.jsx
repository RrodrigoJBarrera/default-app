import React from 'react';
import Input from '../Input/Input';
const Fields = ({ viewPassword, dataForm, handleChange }) => {
  const fields = [
    { id: 'name', text: 'Name' },
    { id: 'lastname', text: 'Last Name' },
    { id: 'username', text: 'Username' },
    { id: 'email', text: 'Email', type: 'email' },
    {
      id: 'password',
      text: 'Password',
      type: viewPassword ? 'text' : 'password',
    },
    {
      id: 'passwordconfirm',
      text: 'Password Confirm',
      type: viewPassword ? 'text' : 'password',
    },
  ];
  return (
    <>
      {fields.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          text={field.text}
          handleChange={handleChange}
          dataForm={dataForm[field.id]}
          type={field.type}
        />
      ))}
    </>
  );
};

export default Fields;
