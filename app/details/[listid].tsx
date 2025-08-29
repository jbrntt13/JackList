import ToDo from '@/components/Todo';
import Button from '@/components/ui/Button';
import { useTodo } from '@/context/TodoContext';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

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
      <ScrollView style={styles.scrollbox}>
        {list.tasks.map((task, index) => (
          <ToDo key={index} id={task.id} todo={task} onDelete={deleteTask} />
        ))}
      </ScrollView>
      <View style={{ paddingHorizontal: 80 }}>
        <Button
          href={{
            pathname: 'details/[listid]/addtolist',
            params: { listid: String(listid) },
          }}
        >
          Add Task To List
        </Button>
      </View>
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
