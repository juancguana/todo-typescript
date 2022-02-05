import { Title } from './todo/components/Title';
import { TodoList } from './todo/components/TodoList';
import { TodoProvider } from './todo/context/TodoProvider';

export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};
