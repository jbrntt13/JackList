import Tasks from './Tasks';

interface List {
  title: string;
  id: string;
  createdOn: Date;
  tasks: Tasks;
}

export default List;
