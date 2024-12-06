import {
  Box,
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ReciepeCard from './ReciepeCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToWeek, removeFromWeek } from '../slices/recipeSlice';

function ReciepeTabs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedWeek, setSelectedWeek] = useState('week1');
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const dispatch = useDispatch();
  const { recipe } = useSelector(state => state);
  const handleSelectedRecipes = id => {
    if (selectedRecipes.includes(id)) {
      setSelectedRecipes(selectedRecipes.filter(item => item !== id));
    } else {
      setSelectedRecipes([...selectedRecipes, id]);
    }
  };
  const handleDeleteRecipes = data => {
    dispatch(removeFromWeek(data));
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader my={2} textAlign="center">
            Select Week
          </ModalHeader>
          <ModalBody>
            <Flex justify="center" gap="4" mb="6">
              {['week1', 'week2', 'week3', 'week4'].map(week => (
                <Button
                  key={week}
                  color={'#000'}
                  onClick={() => setSelectedWeek(week)}
                  bg={selectedWeek === week ? '#CEEBFE' : '#F2F2F2'}
                  _hover={{ bg: 'blue.50' }}
                >
                  {week}
                </Button>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={'center'}>
            <Button
              bg={'#004370'}
              w="130px"
              color={'#fff'}
              borderRadius={'none'}
              _hover={{
                backgroundColor: '#004370',
                color: '#fff',
              }}
              onClick={() => {
                dispatch(
                  addToWeek({ week: selectedWeek, recipes: selectedRecipes })
                );

                onClose();
                setSelectedWeek('week1');
                setSelectedRecipes([]);
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Box
          bg="#fff"
          h={{ base: 'auto', md: '100px' }}
          flexWrap="wrap"
          w="100%"
          transition="all 0.3s ease"
        >
          <Tabs position="relative" variant="unstyled">
            <Box
              position="sticky"
              top="0"
              zIndex={999}
              bg="#fff"
              h={{ base: 'auto', md: '100px' }}
              transition="all 0.3s ease"
              flexWrap="wrap"
            >
              <Container maxW={{ base: '100%', xl: '90%', '2xl': '70%' }}>
                <TabList
                  h={{ base: 'auto', md: '100px' }}
                  justifyContent={{ base: 'start', md: 'space-between' }}
                  alignItems="center"
                  flexWrap="wrap"
                  p="20px 0"
                >
                  {['All Meals', 'Week 1', 'Week 2', 'Week 3', 'Week 4'].map(
                    (tabLabel, index) => (
                      <Tab
                        key={index}
                        fontSize={{ base: '12px', md: '14px' }}
                        fontWeight="bold"
                        color="#004370"
                      >
                        {tabLabel}
                      </Tab>
                    )
                  )}
                  <Button
                    fontSize={{ base: '12px', md: '14px' }}
                    px={{ base: '4', md: '6' }}
                    onClick={onOpen}
                    bg="#004370"
                    color="#fff"
                    _hover={{ backgroundColor: '#004370', color: '#fff' }}
                  >
                    Add to Week
                  </Button>
                </TabList>
                <TabIndicator
                  mt="-30px"
                  height="5px"
                  bg="#004370"
                  borderRadius="1px"
                  display={{ base: 'none', md: 'block' }}
                />
              </Container>
            </Box>

            <TabPanels bgGradient="linear(to-r, #FAF3EE, #F1EBF6, #E6F0F9)">
              {['all', 'week1', 'week2', 'week3', 'week4'].map(
                (weekKey, index) => (
                  <TabPanel key={index}>
                    <Container maxW={{ xl: '90%', '2xl': '70%' }}>
                      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                        {recipe?.[weekKey]?.map(item => (
                          <ReciepeCard
                            key={item.id}
                            data={item}
                            isChecked={selectedRecipes.includes(item?.id)}
                            onDelete={
                              weekKey !== 'all'
                                ? () =>
                                    handleDeleteRecipes({
                                      week: weekKey,
                                      id: item?.id,
                                    })
                                : undefined
                            }
                            onClick={
                              weekKey === 'all'
                                ? () => handleSelectedRecipes(item?.id)
                                : undefined
                            }
                          />
                        ))}
                      </SimpleGrid>
                    </Container>
                  </TabPanel>
                )
              )}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default ReciepeTabs;
