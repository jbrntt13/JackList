// import TodoItem from '@/lib/types/TodoItem';
import Tasks from '@/lib/types/Tasks';
import { Link } from 'expo-router'; // or 'next/link' if using Next.js
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  tasks: Tasks;
  title: string;
  updatedOn: Date;
  id: string;
  onDelete: (id: number) => void;
}

export default function ToDoList({
  tasks,
  id,
  updatedOn,
  title,
  onDelete,
}: IProps) {
  //return <Text style={styles.todolistlook}>{todo.title}</Text>;
  return (
    <View style={styles.mainlist}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.todolistTitle}>{title}</Text>
          <Text style={styles.date}>{updatedOn.toLocaleString()}</Text>
        </View>

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
    </View>
  );
}
const styles = StyleSheet.create({
  mainlist: {
    borderColor: 'gray',
    backgroundColor: 'rgba(128,128,128,0.7)',
    borderWidth: 1,
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 8,
  },
  todolistTitle: {
    flexShrink: 1,
    fontSize: 16,
  },
  seemorebutton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 90,
    marginLeft: 8,
    backgroundColor: 'powderblue',
    textAlign: 'center',
  },
  date: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 15,
    fontSize: 12,
    marginVertical: 0.5,
  },
});
