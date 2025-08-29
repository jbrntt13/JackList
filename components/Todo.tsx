import Task from '@/lib/types/Task';
import { Button, ListItem } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
interface IProps {
  todo: Task;
  id: string;
  onDelete: (id: string) => void;
}

export default function ToDo({ todo, id, onDelete }: IProps) {
  const renderItemAccessory = (): React.ReactElement => (
    <Button status="danger" onPress={() => onDelete(id)}>
      Delete
    </Button>
  );

  return (
    <View style={styles.list}>
      <ListItem title={todo.content} accessoryRight={renderItemAccessory} />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
});
