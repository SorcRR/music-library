import React from 'react';
import './commonStyles.css';

const DropdownSelect = ({ label, fieldName, register, options }) =>
  <div className="inputWrapper">
    <div className="label">{label}</div>
    <select name={fieldName} ref={register}>
      {options.map(option =>
        <option key={option.id} value={option.id}>{option.name}</option>
      )}
    </select>
  </div>

export default DropdownSelect;