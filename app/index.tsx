import ToDoList from '@/components/TodoList';
import { useTodo } from '@/context/TodoContext';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { lists, deleteList } = useTodo();

  // Create a sorted copy for rendering
  const sortedLists = [...lists].sort(
    (b, a) => a.updatedOn.getTime() - b.updatedOn.getTime()
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollbox}>
        {sortedLists.map((list, index) => (
          <ToDoList
            key={index}
            id={list.id}
            tasks={list.tasks}
            title={list.title}
            updatedOn={list.updatedOn}
            onDelete={deleteList}
          />
        ))}
      </ScrollView>
      {/* I just haven't really checked or tried to add a new list to the master list */}
      {/* <Link href="/addtolist" style={styles.button}>
        Go to Add Screen
      </Link> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    borderWidth: 15,
    width: '100%',
    borderColor: 'blue',
  },
  scrollbox: {
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
