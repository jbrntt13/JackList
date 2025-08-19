import { createContext, ReactNode, useContext } from 'react';

type TodoContextType = {
  // We'll add the actual context values and functions later
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

type TodoProviderProps = {
  children: ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  // We'll add the state and functions later
  const value = {};

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
