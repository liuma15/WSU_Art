import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Divider,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Center,
    Avatar,
  } from '@chakra-ui/react';
import { animations } from 'framer-motion';
  import nature from '../img/micheile-com-SxxstJ3ByIg-unsplash.jpg'

 
const Tour = ({name, desc, index}) => {
    return (
      <Flex mt={"25px"}>
        <Stack 
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'dark-lg'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          _hover = {{ boxSize: '102%'}}
          >
            <Box
            h={'relative'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'100%'}>
            <Image
              src={nature}
              layout={'fill'}
            />
          </Box>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              >
              {name}
            </Heading>
            <Divider />
            <Text color={'gray.500'} >
              {desc}
            </Text>
        </Stack>
      </Flex>
    );
  }

  export default Tour;