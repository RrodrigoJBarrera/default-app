import React from 'react';
import { useState } from 'react';
import Form from './Form';
const FormContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });

  const sendForm = (e) => {
    e.preventDefault();
    console.log('handleSubmit', dataForm);
    setDataForm({
      name: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      passwordconfirm: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <>
      <Form
        onSubmit={sendForm}
        dataForm={dataForm}
        handleChange={handleChange}
      ></Form>
    </>
  );
};

export default FormContainer;
