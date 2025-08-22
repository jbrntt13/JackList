import { useTodo } from '@/context/TodoContext';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProps {
  onSubmit: () => void;
}

export default function NewListForm({ onSubmit }: IProps) {
  const { newListName, setNewListName, addNewList } = useTodo();

  function completeForm() {
    //make new list
    addNewList();
    //close the modal
    onSubmit();
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        // value={newtodo}
        onChangeText={(text) => setNewListName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={completeForm}>
        <Text>Add to list</Text>
      </TouchableOpacity>
    </View>
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
