import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Pizza from '../assets/images/pizza.png';
function Banner() {
  return (
    <Box
      w="100%"
      h="350px"
      bgImage={`url(${Pizza})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="#F4E2DD"
        opacity={0.7}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex="1"
      >
        <Heading my={2}> Optimized Your Meal</Heading>
        <Text fontWeight={400}>
          Select Meal to Add in Week. You will be able to edit, modify and
          change the Meal Weeks.
        </Text>
      </Box>
    </Box>
  );
}

export default Banner;
