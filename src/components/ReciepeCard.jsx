import { Box, Image, Badge, Text, Flex, Stack, Icon } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { DeleteIcon } from '@chakra-ui/icons';

function ReciepeCard({ id, data, isChecked, onClick, onDelete }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      id={id}
      cursor={'pointer'}
      boxShadow="lg"
      border={isChecked ? '2px solid #004370' : ''}
      bg="white"
      _hover={{ boxShadow: 'xl' }}
      onClick={onClick}
    >
      <Box position="relative" p={{ base: '4', md: '6' }}>
        <Image
          src={data?.image}
          borderRadius={'12px'}
          alt={data?.name}
          objectFit="cover"
          w="100%"
          h="220px"
        />
        <Stack flexDirection={'row'} justifyContent={'space-between'}>
          {onDelete && (
            <Stack
              cursor={'pointer'}
              position={'absolute'}
              top={'10'}
              left={'8'}
              onClick={onDelete}
            >
              <Icon color={'red'} fontSize={'20px'} as={DeleteIcon} />
            </Stack>
          )}

          <Badge
            width={'100px'}
            position="absolute"
            top="8"
            right="8"
            bg="#000"
            color="white"
            px="2"
            py="1"
            textTransform={'capitalize'}
            borderRadius="md"
            fontSize="12px"
            textAlign={'center'}
          >
            Dinner
          </Badge>
        </Stack>
      </Box>

      <Box p={{ base: '4', md: '6' }}>
        <Stack spacing="3">
          <Text fontWeight="bold" fontSize="lg">
            {data?.name}
          </Text>

          <Text fontSize="sm" color="gray.600" noOfLines={4}>
            {data?.instructions?.join(' ')}
          </Text>

          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">
              Cuisine:{' '}
              <Text as="span" fontWeight="bold">
                {data?.cuisine}
              </Text>
            </Text>
            <Flex align="center">
              <Text fontSize="sm" mr="2">
                Rating:{' '}
                <Text as="span" fontWeight="bold">
                  {data?.rating}
                </Text>
              </Text>
              <Flex>
                {[...Array(5)].map((_, index) => (
                  <Icon
                    as={FaStar}
                    key={index}
                    color={index < 4.6 ? 'blue.400' : 'gray.300'}
                    boxSize="4"
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

export default ReciepeCard;
