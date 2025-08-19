import { ThemedView } from '@/components/ThemedView';
import ToDo from '@/components/Todo';
import TodoItem from '@/lib/types/TodoItem';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type TodoList = TodoItem[];

const mainList: TodoList = [{ title: 'test' }, { title: 'test but better' }];

export default function HomeScreen() {
  const [todolist, setTodolist] = useState<TodoList>(mainList);

  const [newtodo, setNewtodo] = useState<string>('');

  function addTodo() {
    setTodolist([...todolist, { title: newtodo }]);
  }

  function deleteTodo(deleteid: number) {
    setTodolist(todolist.filter((todolist, id) => id != deleteid));
  }

  return (
    <ThemedView style={styles.container}>
      <Text>{newtodo}</Text>

      <ScrollView style={styles.scrollbox}>
        {todolist.map((entry, index) => (
          <ToDo key={index} id={index} todo={entry} onDelete={deleteTodo} />
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        // value={newtodo}
        onChangeText={(text) => setNewtodo(text)}
      />
      <Link href="/addtolist" style={styles.button}>
        Go to Add SCreen
      </Link>
      <TouchableOpacity style={styles.button}>
        <Text>Add to list</Text>
      </TouchableOpacity>
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
