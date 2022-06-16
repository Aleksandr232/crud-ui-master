import React from 'react';
import './Input.css';

const Input = ({
   placeholder,
   handleChange,
   value,
   fieldName
}) => {
   return (
      <input
         placeholder={placeholder}
         onChange={(e) => handleChange(e, fieldName)}
         value={value}
      />
   )
}

export default Input;