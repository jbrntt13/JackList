// import TodoItem from '@/lib/types/TodoItem';
import Tasks from '@/lib/types/Tasks';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
interface IProps {
  tasks: Tasks;
  title: string;
  createdOn: Date;
  id: string;
  onDelete: (id: number) => void;
}

export default function ToDoList({
  tasks,
  id,
  createdOn,
  title,
  onDelete,
}: IProps) {
  //return <Text style={styles.todolistlook}>{todo.title}</Text>;
  return (
    <View style={styles.mainlist}>
      <View style={styles.ToDolists}>
        <Text>{title}</Text>
        <Link
          href={{
            pathname: '/details/[listid]',
            params: { listid: String(id) },
          }}
          style={styles.seemorebutton}
        >
          View List
        </Link>
      </View>
      <Text style={styles.date}>{createdOn.toString()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainlist: {
    borderColor: 'gray',
    backgroundColor: 'rgba(128,128,128,0.7)', // 0.7 is the opacity (0 = transparent, 1 = solid)    backgroundo
    borderWidth: 1,
    marginVertical: 4,
  },
  ToDolists: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
  },
  date: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontSize: 10,
    marginVertical: 1,
  },
  seemorebutton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 90,
    marginLeft: 'auto',
    marginHorizontal: 8,
    backgroundColor: 'powderblue',
  },
});
