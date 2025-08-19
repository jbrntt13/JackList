import { ThemedView } from '@/components/ThemedView';
import ToDo from '@/components/Todo';
import { useTodo } from '@/context/TodoContext';
import TodoItem from '@/lib/types/TodoItem';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

type TodoList = TodoItem[];

const mainList: TodoList = [{ title: 'test' }, { title: 'test but better' }];

export default function HomeScreen() {
  const { todolist, newtodo, deleteTodo, setNewtodo } = useTodo();
  console.log({ todolist });
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollbox}>
        {todolist.map((entry, index) => (
          <ToDo key={index} id={index} todo={entry} onDelete={deleteTodo} />
        ))}
      </ScrollView>
      <Link href="/addtolist" style={styles.button}>
        Go to Add SCreen
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 15,
    width: '100%',
    borderColor: 'blue',
  },
  scrollbox: {
    paddingVertical: 100,
    paddingHorizontal: 20,
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
