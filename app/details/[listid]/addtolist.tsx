import { ThemedView } from '@/components/ThemedView';
import { useTodo } from '@/context/TodoContext';
import TodoItem from '@/lib/types/Task';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
type TodoList = TodoItem[];

//const mainList: TodoList = [{ title: 'test' }, { title: 'test but better' }];

export default function HomeScreen() {
  const {
    newTask,
    lists,
    newListName,
    setNewTask,
    setNewListName,
    addNewList,
    addNewTask,
    deleteTask,
  } = useTodo();
  const { listid } = useLocalSearchParams<{ listid: string }>();

  return (
    <ThemedView style={styles.container}>
      <Text>{newTask}</Text>

      <TextInput
        style={styles.input}
        // value={newtodo}
        onChangeText={(text) => setNewTask(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addNewTask(listid)}
      >
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
