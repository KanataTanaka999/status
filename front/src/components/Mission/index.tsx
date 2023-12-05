import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import TaskList from '@/components/TaskList'
import type { TaskListType } from '@/components/TaskList'


export type MissionItem = {
  title: string;
  tasks: TaskListType;
}

export type MissionList = {
  missions: MissionItem[];
}


export default function Mission(props: MissionList) {
  const { missions } = props;
  console.log(missions);
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Mission
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          今年度の目標です。
        </Text>
      </Stack>
      <Accordion allowMultiple mt={12}>
        { missions.map((mission, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  {`${index+1}. ${mission.title}`}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TaskList tasks={mission.tasks} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );

}
