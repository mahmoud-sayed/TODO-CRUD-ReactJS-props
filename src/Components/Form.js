import React from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
const Form = ({ title, setTitle, handelSubmit, editSign, titleToEdit }) => {

  const handelSubmitAfterEdit = () => { };


  return (

    <form onSubmit={editSign === true ? handelSubmitAfterEdit : handelSubmit} >
      <input
        type="text"
        placeholder='Add ToDo'
        onChange={e => setTitle(e.target.value)}
        value={editSign === true ? titleToEdit : title}
      />
      <button>{editSign === true ? <FaEdit /> : <FaPlus />}</button>
    </form>

  );
};

export default Form;