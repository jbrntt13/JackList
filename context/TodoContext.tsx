import TodoItem from '@/lib/types/TodoItem';
import TodoList from '@/lib/types/TodoList';
import { createContext, ReactNode, useContext, useState } from 'react';

type TodoContextType = {
  // We'll add the actual context values and functions later
  todolist: TodoItem[];
  todolistlist: TodoList[];
  newtodo: string;
  newlistlist: TodoList[];
  newlistname: string;
  deleteTodo: (deleteid: number) => void;
  setNewtodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};
type TodoListList = TodoList[];
const TodoContext = createContext<TodoContextType | undefined>(undefined);
const subList: TodoItem[] = [{ task: 'testxxx' }, { task: 'test but better' }];
const mainList: TodoListList = [
  {
    title: 'Jacks pokemon to catch',
    id: 100,
    tasks: [{ task: 'Porygon' }, { task: 'Gimmighoul' }, { task: 'Zubat' }],
  },
  {
    title: 'Kayleighs pokemon to catch',
    id: 101,
    tasks: [{ task: 'Remordaid' }, { task: 'Larvesta' }, { task: 'Furret' }],
  },
];
type TodoProviderProps = {
  children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  // We'll add the state and functions later
  const [newtodo, setNewtodo] = useState<string>('');
  const [todolist, setTodolist] = useState<TodoItem[]>(subList);
  const [todolistlist, setTodolistlist] = useState<TodoListList>(mainList);
  const [newlistlist, setnewlistlist] = useState<TodoItem[]>(subList);
  const [newlistname, setnewlistname] = useState<string>('');

  function addTodo() {
    setTodolist([...todolist, { task: newtodo }]);
  }

  function addNewMainList() {
    // setTodolistlist([...todolistlist, { task: newtodo }]);

    setTodolistlist([
      ...todolistlist,
      {
        title: newlistname,
        tasks: newlistlist,
        id: Math.floor(Math.random() * 900) + 100,
      },
    ]);
  }

  function deleteTodo(deleteid: number) {
    setTodolist(todolist.filter((todolist, id) => id != deleteid));
  }

  function deleteList(deleteid: number) {
    setTodolistlist(todolistlist.filter((todolistlist, id) => id != deleteid));
  }

  const value = {
    todolist,
    newtodo,
    todolistlist,
    newlistlist,
    newlistname,
    deleteTodo,
    setNewtodo,
    addTodo,
  };

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
