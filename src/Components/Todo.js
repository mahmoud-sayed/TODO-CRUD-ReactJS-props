import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { DATA_URL } from '../API';
import axios from 'axios';

const Todo = ({ id, title, completed, setRefetch, setEditSign, items, setTitleToEdit, setNewTitle }) => {

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

  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input
              type="checkbox"
              checked={completed}
              id="check"
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