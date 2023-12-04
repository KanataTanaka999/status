'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'
import { SiPytorch } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import {SiDjango} from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiMilvus } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSymfony } from "react-icons/si";


interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function SkillList() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Skill Set
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          上記を達成する上で、具体的に勉強する技術を以下に示します。
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'PyTorch'}
            icon={<Icon as={SiPytorch} w={10} h={10} color={'green.500'} />}
            description={'AIの実装'}
            href={'#'}
          />
          <Card
            heading={'Django'}
            icon={<Icon as={SiDjango} w={10} h={10} color={'green.500'} />}
            description={'バックエンドのメインフレームワーク'}
            href={'#'}
          />
          <Card
            heading={'Next.js'}
            icon={<Icon as={SiNextdotjs} w={10} h={10} color={'green.500'} />}
            description={'フロントエンドのメインフレームワーク'}
            href={'#'}
          />
          <Card
            heading={'AWS'}
            icon={<Icon as={SiAmazonaws} w={10} h={10} color={'green.500'} />}
            description={'インフラ構築'}
            href={'#'}
          />
          <Card
            heading={'MySQL'}
            icon={<Icon as={SiMysql} w={10} h={10} color={'green.500'} />}
            description={'データベース'}
            href={'#'}
          />
          <Card
            heading={'milvus'}
            icon={<Icon as={SiMilvus} w={10} h={10} color={'green.500'} />}
            description={'AI系システムのデータベース'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}
