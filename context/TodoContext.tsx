import List from '@/lib/types/List';
import { createContext, ReactNode, useContext, useState } from 'react';

type TodoContextType = {
  newTodo: string;
  lists: List[];
  newListName: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  setNewListName: React.Dispatch<React.SetStateAction<string>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const mainList: List[] = [
  {
    title: 'Jacks pokemon to catch',
    id: 100,
    tasks: [
      { content: 'Porygon' },
      { content: 'Gimmighoul' },
      { content: 'Zubat' },
    ],
  },
  {
    title: 'Kayleighs pokemon to catch',
    id: 101,
    tasks: [
      { content: 'Remordaid' },
      { content: 'Larvesta' },
      { content: 'Furret' },
    ],
  },
];

type TodoProviderProps = {
  children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  // tasks
  const [newTodo, setNewTodo] = useState<string>('');
  // lists
  const [lists, setLists] = useState<List[]>(mainList);
  const [newListName, setNewListName] = useState<string>('');

  const value = {
    newTodo,
    lists,
    newListName,
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
