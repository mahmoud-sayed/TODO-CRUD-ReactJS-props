import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodosData from './Components/TodosData';
import './App.scss';

import axios from 'axios';


const App = () => {

  const [items, setItems] = useState([]); // fetched data
  const [title, setTitle] = useState(''); // new todo To Add
  const [reFetch, setRefetch] = useState(false);

  const DATA_URL = 'http://localhost:100/data'; // data url to use

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

  // handel delete
  const handelDelete = async (id) => {
    const FilteredItems = items.filter(item => item.id !== id);
    setRefetch(true);
    await axios.delete(`${DATA_URL}/${id}`, { ...FilteredItems });
    setRefetch(false);
  };



  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form
          title={title}
          setTitle={setTitle}
          handelSubmit={handelSubmit}
        />
        <TodosData items={items} handelDelete={handelDelete} />
      </div>
    </div>
  );
};

export default App;