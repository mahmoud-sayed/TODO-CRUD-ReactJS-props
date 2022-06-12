import React from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { DATA_URL } from './../API';
const Form = ({ title, setTitle, handelSubmit, editSign, titleToEdit, setNewTitle, newTitle }) => {

  const handelSubmitAfterEdit = () => {
    const newEditedTitle = { ...titleToEdit, title: newTitle };
    axios.put(`${DATA_URL}/${titleToEdit[0].id}`, newEditedTitle);

  };


  return (

    <form onSubmit={editSign === true ? handelSubmitAfterEdit : handelSubmit} >
      <input
        type="text"
        placeholder='Add ToDo'
        onChange={e => { editSign === true ? setNewTitle(e.target.value) : setTitle(e.target.value); }}
        value={editSign === true ? newTitle : title}
      />
      <button>{editSign === true ? <FaEdit /> : <FaPlus />}</button>
    </form>

  );
};

export default Form;