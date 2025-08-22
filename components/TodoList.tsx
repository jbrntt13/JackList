// import TodoItem from '@/lib/types/TodoItem';
import Tasks from '@/lib/types/Tasks';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
interface IProps {
  tasks: Tasks;
  title: string;
  id: string;
  onDelete: (id: number) => void;
}

export default function ToDoList({ tasks, id, title, onDelete }: IProps) {
  //return <Text style={styles.todolistlook}>{todo.title}</Text>;
  return (
    <View style={styles.list}>
      <Text>{title}</Text>
      <Link
        href={{ pathname: '/details/[listid]', params: { listid: String(id) } }}
        style={styles.seemorebutton}
      >
        View List
      </Link>
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
  seemorebutton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 90,
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: 'powderblue',
  },
  scrollbox: {
    paddingVertical: 100,
    paddingHorizontal: 20,
    width: '100%',
  },
});
