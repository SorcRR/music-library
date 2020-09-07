import React from 'react';
import './commonStyles.css';

const TextInput = ({ label, fieldName, register, errors, customError }) =>
  <div className="inputWrapper">
    <div className="label">{label}</div>
    <div className="fieldWrapper">
      <input className="inputStyle"
        name={fieldName}
        ref={register({ required: 'Field is required.' })} />
      <div className="fieldError">
        <div>{errors[fieldName]?.message}</div>
        <div>{customError?.message}</div>
      </div>
    </div>
  </div>

export default TextInput;