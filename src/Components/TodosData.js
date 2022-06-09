import React from 'react';
import Todo from './Todo';

const TodosData = ({ items, handelDelete }) => {


  return (
    <React.Fragment>
      {
        items.length === 0 ? <h2 style={{ color: '#3A7BD5' }}>There is No todo </h2> :
          items.map(item =>

            <Todo
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
              handelDelete={handelDelete}
            />

          )
      }
    </React.Fragment >
  );
};

export default TodosData;