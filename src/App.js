import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodosData from './Components/TodosData';
import { DATA_URL } from './API';
import './App.scss';

import axios from 'axios';


const App = () => {

  const [items, setItems] = useState([]); // fetched data
  const [title, setTitle] = useState(''); // new todo To Add
  const [reFetch, setRefetch] = useState(false);
  const [editSign, setEditSign] = useState(false);
  const [titleToEdit, setTitleToEdit] = useState('');
  const [newTitle, setNewTitle] = useState('');



  useEffect(() => {

    // fetch data
    (async function () {
      const response = await axios.get(DATA_URL);
      setItems(response.data);
    })();

  }, [reFetch]);

  // handel create
  const handelCreate = async () => {
    const id = items[items.length - 1].id + 1; // create new Id 
    await axios.post(DATA_URL, { id, title, completed: false }); // adding data in proper way
    setTitle('');
    setRefetch(true);
  };

  //handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
    handelCreate();
    setRefetch(false);
  };




  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form
          title={title}
          setTitle={setTitle}
          handelSubmit={handelSubmit}
          editSign={editSign}
          titleToEdit={titleToEdit}
          setNewTitle={setNewTitle} newTitle={newTitle}
        />
        <TodosData items={items} setRefetch={setRefetch} setEditSign={setEditSign} setTitleToEdit={setTitleToEdit} setNewTitle={setNewTitle} />
      </div>
    </div>
  );
};

export default App;