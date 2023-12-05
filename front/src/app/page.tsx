'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { FaRegChessKing } from "react-icons/fa6";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaPersonRifle } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { BsPersonXFill } from "react-icons/bs";
import { RiAliensFill } from "react-icons/ri";
import { GiHealing } from "react-icons/gi";
import { ReactElement } from 'react'
import SkillList from '@/components/SkillList'
import RadarChart from '@/components/RadarChart'
import Mission from '@/components/Mission'
import type { MissionItem } from '@/components/Mission'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function Main() {

  const missions: MissionItem[] = [
    {
      title: "AI技術の習得",
      tasks: [
        {
          title: "AI実装検定A級の取得",
          flag: true,
        },
        {
          title: "Pytorchの習得",
          flag: true,
        },
        {
          title: "GPTの調査",
          flag: true,
        },
        {
          title: "自作AIの実装",
          flag: true,
        },
        {
          title: "E資格の取得",
          flag: false,
        },
      ],
    },
    {
      title: "Djangoの習得",
      tasks: [
        {
          title: "レスQくんの開発",
          flag: true,
        },
        {
          title: "megooleの開発",
          flag: true,
        },
        {
          title: "セラピリストの開発",
          flag: true,
        },
      ],
    },
    {
      title: "AWSの習得(基礎)",
      tasks: [
        {
          title: "レスQくんの開発",
          flag: true,
        },
        {
          title: "megooleの開発",
          flag: true,
        },
        {
          title: "Eartch Hopperの開発",
          flag: true,
        },
      ],
    },
    {
      title: "NextJS + React Redux + TypeScript",
      tasks: [
        {
          title: "レスQくんの開発",
          flag: true,
        },
        {
          title: "megooleの開発",
          flag: true,
        },
        {
          title: "セラピリストの開発",
          flag: true,
        },
      ],
    },
  ];

  return (
    <Container maxW={'7xl'} py={12}>
      <Tabs>
        <TabList>
          <Tab>Skill Chart</Tab>
          <Tab>Skill Set</Tab>
          <Tab>Mission</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SplitWithImage />
          </TabPanel>
          <TabPanel>
            <SkillList />
          </TabPanel>
          <TabPanel>
            <Mission missions={missions} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export function SplitWithImage() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Skill Chart
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          エンジニアのスキルを7種類に分類し、現在のスキルレベルと10年後のスキルレベルを比較しています。
        </Text>
      </Stack>
      <Container maxW={'5xl'} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Stack spacing={4}>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={RiAliensFill} color={'red.500'} w={5} h={5} />}
                iconBg={useColorModeValue('red.100', 'red.900')}
                text={'S: 国内上位10%級'}
              />
              <Feature
                icon={<Icon as={GiHealing} color={'orange.500'} w={5} h={5} />}
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={'A: 社内技術部エース級'}
              />
              <Feature
                icon={<Icon as={FaPersonMilitaryRifle} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'B: プロジェクト内の技術リーダー級'}
              />
              <Feature
                icon={<Icon as={FaPersonRifle} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'C: プロジェクト内で1メンバー'}
              />
              <Feature
                icon={<Icon as={IoPersonSharp} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'D: 0.5~1人未満の戦力要因'}
              />
              <Feature
                icon={<Icon as={BsPersonXFill} color={'gray.500'} w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'gray.900')}
                text={'E: 戦力外'}
              />
            </Stack>
          </Stack>
          <Flex>
            <RadarChart />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
