import { useTodo } from '@/context/TodoContext';
import { Button, Divider, Input } from '@ui-kitten/components';
import { StyleSheet, Text, View } from 'react-native';

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
    <View
      style={{
        gap: 8,
        width: '100%',
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Input onChangeText={(text) => setNewListName(text)} />
      <Divider />
      <Button style={{ width: '40%' }} onPress={completeForm}>
        <Text>Add to list</Text>
      </Button>
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
