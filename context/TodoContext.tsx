import TodoItem from '@/lib/types/TodoItem';
import { createContext, ReactNode, useContext, useState } from 'react';

type TodoContextType = {
  // We'll add the actual context values and functions later
  todolist: TodoItem[];
  newtodo: string;
  deleteTodo: (deleteid: number) => void;
  setNewtodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);
const mainList: TodoItem[] = [{ title: 'test' }, { title: 'test but better' }];

type TodoProviderProps = {
  children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  // We'll add the state and functions later
  const [newtodo, setNewtodo] = useState<string>('');
  const [todolist, setTodolist] = useState<TodoItem[]>(mainList);

  function addTodo() {
    setTodolist([...todolist, { title: newtodo }]);
  }

  function deleteTodo(deleteid: number) {
    setTodolist(todolist.filter((todolist, id) => id != deleteid));
  }

  const value = { todolist, newtodo, deleteTodo, setNewtodo, addTodo };

  return (
    <TodoContext.Provider value={value as TodoContextType}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
