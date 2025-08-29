import { useTodo } from '@/context/TodoContext';
import TodoItem from '@/lib/types/Task';
import { Button, Input } from '@ui-kitten/components';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <Input onChangeText={(text) => setNewTask(text)} />
      <Button style={{ width: '100%' }} onPress={() => addNewTask(listid)}>
        <Text>Add to list</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    paddingHorizontal: 80,
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
