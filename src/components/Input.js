import React from "react";

const Input = ({ name, value, onChange }) => {
  return (
    <div>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
