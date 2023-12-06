import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import ViewPassButton from './ViewPassButton';
import FormFields from './FormFields';

const Form = ({ onSubmit, dataForm, handleChange }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const toggleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex-row space-y-5">
        <FormFields
          dataForm={dataForm}
          viewPassword={viewPassword}
          handleChange={handleChange}
        ></FormFields>
        <ViewPassButton
          titleButton={viewPassword ? 'Hide' : 'View'}
          onclick={toggleViewPassword}
        ></ViewPassButton>

        <SubmitButton></SubmitButton>
      </div>
    </form>
  );
};

export default Form;
