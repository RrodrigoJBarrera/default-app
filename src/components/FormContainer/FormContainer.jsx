import React from 'react';
import { useState } from 'react';
import Form from '../Form/Form';
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

    if (!dataForm.name) {
      alert('The field Name cannot be empty');
      document.getElementById('name').focus();
      return null;
    }

    if (!dataForm.lastname) {
      alert('The field Lastname cannot be empty');
      document.getElementById('lastname').focus();
      return null;
    }

    if (!dataForm.username) {
      alert('The field Username cannot be empty');
      document.getElementById('username').focus();
      return null;
    }

    if (!dataForm.email) {
      alert('The field email cannot be empty');
      document.getElementById('email').focus();
      return null;
    }

    if (!dataForm.password) {
      alert('The field Passowrd cannot be empty');
      document.getElementById('password').focus();
      return null;
    }

    if (!dataForm.passwordconfirm) {
      alert('The field Password Confirm cannot be empty');
      document.getElementById('passwordconfirm').focus();
      return null;
    }

    if (dataForm.password !== dataForm.passwordconfirm) {
      alert('Las contraseñas deben coicidir');
      return null;
    }

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
      <div className="flex items-center justify-center h-screen bg-slate-800">
        <Form
          onSubmit={sendForm}
          dataForm={dataForm}
          handleChange={handleChange}
        ></Form>
      </div>
    </>
  );
};

export default FormContainer;
