import TodoItem from '@/lib/types/TodoItem';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface IProps {
  todo: TodoItem;
  id: number;
  onDelete: (id: number) => void;
}

export default function ToDo({ todo, id, onDelete }: IProps) {
  //return <Text style={styles.todolistlook}>{todo.title}</Text>;
  return (
    <View style={styles.list}>
      <Text style={styles.todolistlook}>{todo.title}</Text>
      <TouchableOpacity
        style={styles.deletebutton}
        onPress={() => onDelete(id)}
      >
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  todolistlook: {
    fontSize: 15,
    color: 'black',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
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
});
