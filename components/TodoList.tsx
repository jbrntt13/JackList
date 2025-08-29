// import TodoItem from '@/lib/types/TodoItem';
import Button from '@/components/ui/Button';
import Tasks from '@/lib/types/Tasks';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ListItem } from '@ui-kitten/components';

import { TouchableOpacity, View } from 'react-native';

interface IProps {
  tasks: Tasks;
  title: string;
  updatedOn: Date;
  id: string;
  onDelete: (id: string) => void;
}

export default function ToDoList({
  tasks,
  id,
  updatedOn,
  title,
  onDelete,
}: IProps) {
  const renderItemAccessory = (): React.ReactElement => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Button
        href={{
          pathname: 'details/[listid]',
          params: { listid: String(id) },
        }}
      >
        View List
      </Button>
      <View style={{ alignSelf: 'flex-end' }}>
        <TouchableOpacity onPress={() => onDelete(String(id))}>
          <FontAwesome name="trash-o" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <ListItem
        title={`${title}`}
        description={`${updatedOn.toLocaleString()}`}
        accessoryRight={renderItemAccessory}
      />
    </View>
  );
}
