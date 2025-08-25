import Tasks from './Tasks';

interface List {
  title: string;
  id: string;
  updatedOn: Date;
  tasks: Tasks;
}

export default List;
