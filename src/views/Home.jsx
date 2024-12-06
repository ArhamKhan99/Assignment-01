import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import Banner from '../components/Banner';
import ReciepeTabs from '../components/ReciepeTabs';

export default function Home() {
  return (
    <Stack
      w={'100%'}
      h={'100vh'}
      bgGradient="linear(to-r, #FAF3EE, #F1EBF6, #E6F0F9)"
      position={'relative'}
    >
      <Banner />
      <Stack w="100%" h="100%">
        <Box py={4}>
          <Container maxW={{ xl: '90%', '2xl': '70%' }}>
            <Heading fontFamily={'Rubik'} fontWeight={400}>
              Week Orders
            </Heading>
          </Container>
        </Box>
        <Stack pos={'relative'} w="100%" h="100%">
          <ReciepeTabs />
        </Stack>
      </Stack>
    </Stack>
  );
}
