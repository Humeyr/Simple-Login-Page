import React from 'react';
import  './button.css';

function Button({onClick}) {
  return (
        <button className='buton' onClick={onClick} >Giris Yap</button>
    
  );
}

export default Button