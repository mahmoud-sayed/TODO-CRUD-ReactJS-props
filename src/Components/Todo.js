import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { DATA_URL } from '../API';
import axios from 'axios';

const Todo = ({ id, title, completed, setRefetch, setEditSign, items, setTitleToEdit, setNewTitle }) => {

  const [isChecked, setIsChecked] = useState(completed);

  // handel delete
  const handelDelete = async (id) => {
    const FilteredItems = items.filter(item => item.id !== id);
    setRefetch(true);
    await axios.delete(`${DATA_URL}/${id}`, { ...FilteredItems });
    setRefetch(false);
  };

  // handel edit
  const handelEditClick = (id) => {
    const itemToEdit = items.filter(item => item.id === id);
    setTitleToEdit(itemToEdit);
    setNewTitle(itemToEdit[0].title);
  };

  //handel Check
  const handelCheck = async (id) => {
    const itemToCheck = items.filter(item => item.id === id);
    const item = itemToCheck[0];
    setIsChecked(!isChecked);
    await axios.put(`${DATA_URL}/${id}`, { ...item, completed: !completed });
  };

  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input
              type="checkbox"
              checked={isChecked}
              id="check"
              onChange={() => handelCheck(id)}
            />
            <p>{title}</p>
          </div>
          <div className='todo-actions'>
            <FaEdit
              className='todo-edit'
              onClick={() => { handelEditClick(id); setEditSign(true); }}
            />
            <FaTrashAlt
              className='todo-delete'
              onClick={() => handelDelete(id)}
            />
          </div>
        </li>

      </ul>
    </div >
  );
};

export default Todo;