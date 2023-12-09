import React from 'react';
import Input from '../Input/Input';
import userIcon from '../../assets/icons/user.svg';
import atIcon from '../../assets/icons/at-symbol.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';
import eyeOpenIcon from '../../assets/icons/eye.svg';
import eyeCloseIcon from '../../assets/icons/eye-slash.svg';
import lockIcon from '../../assets/icons/lock-closed.svg';
const Fields = ({ viewPassword, dataForm, handleChange }) => {
  const fields = [
    { id: 'name', placeholder: 'Name', icon: `${userIcon}` },
    { id: 'lastname', placeholder: 'Last Name', icon: `${userIcon}` },
    { id: 'username', placeholder: 'Username', icon: `${atIcon}` },
    {
      id: 'email',
      placeholder: 'Email',
      type: 'email',
      icon: `${envelopeIcon}`,
    },
    {
      id: 'password',
      placeholder: 'Password',
      type: viewPassword ? 'text' : 'password',
      icon: `${lockIcon}`,
    },
    {
      id: 'passwordconfirm',
      placeholder: 'Password Confirm',
      type: viewPassword ? 'text' : 'password',
      icon: `${lockIcon}`,
    },
  ];
  return (
    <>
      {fields.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          placeholder={field.placeholder}
          handleChange={handleChange}
          dataForm={dataForm[field.id]}
          type={field.type}
          icon={field.icon}
        />
      ))}
    </>
  );
};

export default Fields;
