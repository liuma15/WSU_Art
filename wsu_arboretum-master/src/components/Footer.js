import React from 'react';
import { Link, Box, Image, Flex, Text, HStack, Center } from "@chakra-ui/react";
import wsu from "../img/Wordmark_Flaming_W_REV.png";

const Footer = (props) => {
   
    return (
        <Flex
            mt={100}
            bg={["primary.700"]}
            color={["primary.700"]}
            width="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
            boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
            padding={4}

        >
            <Center>
                <Image src={wsu} width="350px"/>
            </Center>
            <Flex width="100%" justifyContent="center" wrap="wrap">
            <Text width="50%" textAlign="center" color="white" fontSize="sm">
               Created by Joe Wright, Tanyi Besong, and Martin Liu
            </Text>
            </Flex>
        </Flex>
    );
  };

export default Footer;