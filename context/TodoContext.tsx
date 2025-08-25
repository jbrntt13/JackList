import List from '@/lib/types/List';
import Task from '@/lib/types/Task';
import { createContext, ReactNode, useContext, useState } from 'react';
import uuid from 'react-native-uuid';

type TodoContextType = {
  newTask: string;
  lists: List[];
  newListName: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  setNewListName: React.Dispatch<React.SetStateAction<string>>;
  addNewList: () => void;
  addNewTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const mainList: List[] = [
  {
    title: 'Jacks pokemon to catch',
    id: '100',
    createdOn: new Date(Date.now()),
    tasks: [
      { id: uuid.v4(), content: 'Porygon' },
      { id: uuid.v4(), content: 'Gimmighoul' },
      { id: uuid.v4(), content: 'Zubat' },
    ],
  },
  {
    title: 'Kayleighs pokemon to catch',
    id: '101',
    createdOn: new Date(Date.now()),
    tasks: [
      { id: uuid.v4(), content: 'Remordaid' },
      { id: uuid.v4(), content: 'Larvesta' },
      { id: uuid.v4(), content: 'Furret' },
    ],
  },
];

type TodoProviderProps = {
  children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  // tasks
  const [newTask, setNewTask] = useState<string>('');
  // lists
  const [lists, setLists] = useState<List[]>(mainList);
  const [newListName, setNewListName] = useState<string>('');

  // Map every task id to its parent list
  const taskListMap = lists.reduce<Record<string, string>>((acc, list) => {
    list.tasks.forEach((task) => {
      acc[task.id as string] = list.id;
    });
    return acc;
  }, {});
  console.log(taskListMap);
  function addNewList() {
    setLists([
      ...lists,
      {
        title: newListName,
        tasks: [],
        createdOn: new Date(Date.now()),
        id: uuid.v4(),
      },
    ]);
  }

  function addNewTask(id: string) {
    const listToUpdate = lists.find((list) => list.id === id);
    if (!listToUpdate) return null;

    const updatedList: List = {
      ...listToUpdate,
      tasks: [
        ...listToUpdate.tasks,
        {
          id: uuid.v4(),
          content: newTask,
        },
      ],
    };

    setLists(lists.map((list) => (list.id === id ? updatedList : list)));
  }

  function deleteTask(id: Task['id']) {
    const listId = taskListMap[id];
    const list = lists.find((list) => list.id === listId);

    if (!list) return null;

    const newList: List = {
      ...list,
      tasks: list.tasks.filter((task) => task.id !== id),
    };

    const listsWeWantToKeep: List[] = lists.filter(
      (list) => list.id !== listId
    );

    setLists([...listsWeWantToKeep, newList]);

    console.log('it connects');
  }

  const value: TodoContextType = {
    newTask,
    lists,
    newListName,
    setNewTask,
    setNewListName,
    deleteTask,
    addNewList,
    addNewTask,
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
