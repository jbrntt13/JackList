import TodoItem from '@/lib/types/TodoItem';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  todo: TodoItem;
  id: number;
}

export default function ToDo({ todo, id }: IProps) {
  return <Text style={styles.todolistlook}>{todo.title}</Text>;
}
const styles = StyleSheet.create({
  todolistlook: {
    fontSize: 15,
    color: 'black',
  },
});
