import { ThemedView } from '@/components/ThemedView';
import ToDo from '@/components/Todo';
import { useTodo } from '@/context/TodoContext';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function Details() {
  const { listid } = useLocalSearchParams<{ listid: string }>();
  const { lists, deleteTask } = useTodo();
  const navigation = useNavigation();
  const list = lists.find((l) => l.id === listid);

  if (!listid) {
    return <Text>Missing list id.</Text>;
  }
  if (!list) {
    return <Text>No list found for id: {listid}</Text>;
  }

  useEffect(() => {
    navigation.setOptions({
      title: list.title,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        <ScrollView style={styles.scrollbox}>
          {list.tasks.map((task, index) => (
            <ToDo key={index} id={task.id} todo={task} onDelete={deleteTask} />
          ))}
        </ScrollView>
        <Link
          href={{
            pathname: '/details/[listid]/addtolist',
            params: { listid: String(listid) },
          }}
          style={styles.button}
        >
          Go to Add Screen
        </Link>
      </ThemedView>
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
