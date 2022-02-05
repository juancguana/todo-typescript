import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false,
    },
    {
      id: '2',
      desc: 'Piedrea del alma',
      completed: false,
    },
  ],
  completed: 0,
  pending: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
