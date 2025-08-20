import { ThemedView } from '@/components/ThemedView';
import ToDo from '@/components/Todo';
import { useTodo } from '@/context/TodoContext';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Text } from 'react-native';
export default function Details() {
  const { listid } = useLocalSearchParams<{ listid: string }>();
  const { todolistlist, deleteTodo } = useTodo();
  const navigation = useNavigation();
  const convertedid = listid ? parseInt(listid, 10) : undefined;
  const list =
    convertedid !== undefined
      ? todolistlist.find((l) => l.id === convertedid)
      : undefined;
  console.log('this is listid: ' + listid);
  console.log('this is our list of lists: ' + todolistlist);
  console.log('this is list: ' + list);
  console.log('this is convertedid: ' + convertedid);
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
          {list.tasks.map((entry, index) => (
            <ToDo key={index} id={index} todo={entry} onDelete={deleteTodo} />
          ))}
        </ScrollView>
        <Link href="/addtolist" style={styles.button}>
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
