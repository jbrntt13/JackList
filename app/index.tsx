import ToDoList from '@/components/TodoList';
import { useTodo } from '@/context/TodoContext';
import TodoList from '@/lib/types/TodoList';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

//type TodoList = TodoItem[];
//type TodoItem = { task: string };
//type TodoList = { title: string; tasks: TodoItem[] };
type TodoListList = TodoList[];

export default function HomeScreen() {
  const { lists } = useTodo();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollbox}>
        {lists.map((list, index) => (
          <ToDoList
            key={index}
            id={list.id}
            tasks={list.tasks}
            title={list.title}
            onDelete={deleteTodo}
          />
        ))}
      </ScrollView>
      {/* I just haven't really checked or tried to add a new list to the master list */}
      {/* <Link href="/addtolist" style={styles.button}>
        Go to Add Screen
      </Link> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    borderWidth: 15,
    width: '100%',
    borderColor: 'blue',
  },
  scrollbox: {
    width: '100%',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: 'yellow',
  },
  todolistlook: {
    fontSize: 20,
    color: 'maroon',
  },
});
