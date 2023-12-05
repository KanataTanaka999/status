import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export type Task = {
  title: string;
  flag: boolean;
};

export type TaskListType = {
  tasks: Task[];
};

export default function TaskList(props: TaskListType) {
  const { tasks } = props;
  return(
    <List spacing={3}>
      { tasks.map((task, index) => (
        <ListItem key={index}>
          <ListIcon as={MdCheckCircle} color={`${task.flag ? 'green.500' : 'gray.500'}`} />
          {`${index+1}. ${task.title}`}
        </ListItem>
      ))}
    </List>
  );
}
