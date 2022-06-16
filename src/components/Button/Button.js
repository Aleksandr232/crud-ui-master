import React from 'react';
import Button from 'react-bootstrap/Button'
import './Button.css';

const Btn = ({
   label,
   type,
   disabled = false,
   handleClick,
   classNames,
   data
}) => {
   return (
      <Button 
         variant="danger"
         className={classNames}
         onClick={() => handleClick(data)}
         type={type}
         disabled={disabled}
      >
         {label}
      </Button>
   )
}

export default Btn;