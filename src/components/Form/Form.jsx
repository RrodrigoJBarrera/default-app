import React, { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton';
import ViewPassButton from '../Buttons/ViewPassButton';
import FormFields from './FormFields';

const Form = ({ onSubmit, dataForm, handleChange }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const toggleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <form onSubmit={onSubmit} className="bg-slate-500 p-5 rounded shadow-xl">
      <div className="flex-row space-y-5">
        <FormFields
          dataForm={dataForm}
          viewPassword={viewPassword}
          handleChange={handleChange}
        ></FormFields>
        <div className="flex-col flex items-end space-y-5">
          <ViewPassButton
            titleButton={viewPassword ? 'Hide' : 'View'}
            onclick={toggleViewPassword}
          ></ViewPassButton>
        </div>
        <div className="flex flex-col">
          <SubmitButton></SubmitButton>
        </div>
      </div>
    </form>
  );
};

export default Form;
