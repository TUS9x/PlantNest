import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    HStack,
    Text,
    useColorModeValue,
    Select,
    Box, 
    Image
} from '@chakra-ui/react';
import { useState, useEffect, NavLink } from 'react';
import axios from 'axios';
import {FiGift} from 'react-icons/fi'
const QuantitySelect = () => {
    
    return (
      <Select
        maxW="64px"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    )
}
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

    console.log(cartItems)
    return (
        <>
        <h1> CART PAGE</h1>;
        <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
        >
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
        >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart (X items)
            </Heading>
            <Stack spacing="6">
                {cartItems.map((item) => (
                <Box key="item.id">
                    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
                    <Stack direction="row" spacing="5" width="full">
                        <Image
                            rounded="lg"
                            width="120px"
                            height="120px"
                            fit="cover"
                            src={item.url}
                            alt={item.name}
                            draggable="false"
                            loading="lazy"
                        />
                        <Box pt="4">
                            <Stack spacing="0.5">
                            <Text fontWeight="medium">{item.name}</Text>
                            <Text color='gray.600' fontSize="sm">
                                {item.description}
                            </Text>
                            </Stack>                           
                            <HStack spacing="1" mt="3" color='gray.600'>
                                <FiGift boxSize="4" />
                                <Link fontSize="sm" textDecoration="underline">
                                Add gift wrapping
                                </Link>
                            </HStack>            
                        </Box>
                    </Stack>
                        <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
                      <QuantitySelect
                        value={item.quantity}
                      />
                      <Box  >$ {item.price}</Box> 
                      <Button aria-label={`Delete from cart`} />
                        </Flex>
                    </Flex>
                </Box>
                ))}
            </Stack>
            </Stack>
  
            <Flex direction="column" align="center" flex="1">
            <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <NavLink to='/' color='blue.500'>Continue shopping</NavLink>
            </HStack>
            </Flex>
      </Stack>
        </Box>
        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
        <Stack spacing="6">
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              $ PRICE
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="blue" size="lg" fontSize="md">
          Checkout
        </Button>
      </Stack>
        </>
    ) 
}

export default Cart;
