import { ThemedView } from '@/components/ThemedView';
import ToDo from '@/components/Todo';
import TodoItem from '@/lib/types/TodoItem';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
      <TextInput
        style={styles.input}
        // value={newtodo}
        onChangeText={(text) => setNewtodo(text)}
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Add to list</Text>
      </TouchableOpacity>
      {todolist.map((entry, index) => (
        <View key={index} style={styles.list}>
          <ToDo key={index} id={index} todo={entry} />
          <TouchableOpacity
            style={styles.deletebutton}
            onPress={() => deleteTodo(index)}
          >
            <Text>delete</Text>
          </TouchableOpacity>
        </View>
      ))}
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
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
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
  deletebutton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 90,
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: 'red',
  },
  todolistlook: {
    fontSize: 20,
    color: 'maroon',
  },
});
