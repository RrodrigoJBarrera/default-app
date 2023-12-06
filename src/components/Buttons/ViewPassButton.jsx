import React from 'react';

const ViewPassButton = ({ titleButton, onclick }) => {
  return (
    <button
      type="button"
      className="border hover:bg-slate-600"
      onClick={onclick}
    >
      {titleButton}
    </button>
  );
};

export default ViewPassButton;
