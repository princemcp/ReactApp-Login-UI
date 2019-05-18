import React from "react";

const inputTextBox = ({ name, label, error, ...rest }) => {
  const style = { border: "1px solid red" };
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        style={error ? style : null}
      />
    </div>
  );
};
export default inputTextBox;
