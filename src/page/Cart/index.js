import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    HStack,
    Text,
    Select,
    Box, 
    Image
} from '@chakra-ui/react';
import { useState, useEffect, NavLink } from 'react';
import axios from 'axios';
import {FiGift} from 'react-icons/fi';
import {MdOutlineCancel} from 'react-icons/md'
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        axios({
          method: 'get',
          url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
          //url: 'http://52.253.98.98:8080/api/product',
          data: {},
        }).then((response) => {
            setCartItems(response.data);
        });
      }, []);

  return ( 
      <Box
      maxW={{lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8' }}
      py={{ base: '6', md: '8' }}
      >
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8' }}
        >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                  Shopping Cart (X items)
              </Heading>
              <Stack spacing="6">
                  {cartItems.map((item) => (
                  <Box key="item.id">
                      <Flex direction={{ base: 'column', md: 'row' }} align="center" width='full'>
                        <Flex direction="row" justifyContent='space-between'>
                          <Image
                              rounded="lg"
                              width="120px"
                              height="120px"
                              fit="cover"
                              src='https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8='
                              alt={item.name}
                          />
                          <Flex direction='column' justifyContent='space-between' pt="2" width={{base:'200px', md:'400px'}} pl='1rem' >
                              <Stack spacing="0.5" >
                                <Text  fontWeight="medium" fontSize='2xl'>{item.name}</Text>
                              </Stack>
                              <Flex direction='row' justify="space-between" width='full'>
                                <Select
                                  maxW="80px"
                                  aria-label="Select quantity"
                                  fontSize='lg'
                                  
                                >
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </Select>
                                <Box >$ {item.price}</Box> 
                                
                              </Flex>                           
                              <HStack spacing="1" mt="3" color='gray.600'>
                                  <FiGift boxSize="4" />
                                  <Link fontSize="md" textDecoration="underline" >
                                  Add Voucher
                                  </Link>
                              </HStack>            
                          </Flex>  
                          <Box pt='50px' pl='50px' _hover={{ color: 'red.500' }} fontSize='4xl'><MdOutlineCancel /></Box>
                        </Flex  >    
                      </Flex>
                  </Box>
                  ))}
              </Stack>
            </Stack>
            <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="40%" marginTop='50px'>
              <Heading size="md">Order Summary</Heading>
              <Stack spacing="6">
                <Flex justify="space-between">
                  <Text fontSize="lg" fontWeight="semibold">
                    Total
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    $ PRICE
                  </Text>
                </Flex>
              </Stack>
              <Button colorScheme="green" size="lg" fontSize="xl">
                Checkout
              </Button>
              <Flex direction="column" align="center" flex="1">
                <HStack mt="6" fontWeight="semibold">
                    <p>or</p>
                    <Link to='/' color='blue.500'>Continue shopping</Link>
                </HStack>
              </Flex>
            </Stack>
            
        </Stack>
        
      </Box>

  ) 
}

export default Cart;
