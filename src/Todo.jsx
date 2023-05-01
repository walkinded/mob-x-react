import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from './store/todo';

const Todo = observer(() => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch todos</button>
      {todo.todos.map((t) => (
        <div className='item' key={t.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onClick={() => todo.completeTodo(t.id)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
