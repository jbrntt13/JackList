import TodoItem from './TodoItem';

interface TodoList {
  title: string;
  tasks: TodoItem[];
  id: number;
}

export default TodoList;
