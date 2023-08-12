import { Button, Flex, Heading, Link, Stack, HStack, Text, Select, Box, Image } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { FiGift } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
function Cart() {
    var total = 0;
    return (
        <React.Fragment>
            <Box maxW={{ lg: '7xl' }} mx="auto" px={{ base: '4', md: '8' }} py={{ base: '6', md: '8' }}>
                <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }} spacing={{ base: '8' }}>
                    <Stack spacing={{ base: '8', md: '10' }} flex="2">
                        <Heading fontSize="2xl" fontWeight="extrabold">
                            Shopping Cart (X items)
                        </Heading>
                        {/* <Stack spacing="6">
                            {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                            {context.cart.map((cartItem) => (
                                <Box key="item.id">
                                    <Flex direction={{ base: 'column', md: 'row' }} align="center" width="full">
                                        <Flex direction="row" justifyContent="space-between">
                                            <Image
                                                rounded="lg"
                                                width="120px"
                                                height="120px"
                                                fit="cover"
                                                src="https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8="
                                                alt={cartItem.name}
                                            />
                                            <Flex
                                                direction="column"
                                                justifyContent="space-between"
                                                pt="2"
                                                width={{ base: '200px', md: '400px' }}
                                                pl="1rem"
                                            >
                                                <Stack spacing="0.5">
                                                    <Text fontWeight="medium" fontSize="2xl">
                                                        {cartItem.name}
                                                    </Text>
                                                </Stack>
                                                <Flex direction="row" justify="space-between" width="full">
                                                    <Select maxW="80px" aria-label="Select quantity" fontSize="lg">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </Select>
                                                    <Box>$ {cartItem.price}</Box>
                                                    <div style={{ display: 'none' }}>
                                                        {(total += cartItem.price * 1 * (cartItem.quantity * 1))}
                                                    </div>
                                                </Flex>
                                                <HStack spacing="1" mt="3" color="gray.600">
                                                    <FiGift boxSize="4" />
                                                    <Link fontSize="md" textDecoration="underline">
                                                        Add Voucher
                                                    </Link>
                                                </HStack>
                                            </Flex>
                                            <Box pt="50px" pl="50px" _hover={{ color: 'red.500' }} fontSize="4xl">
                                                <MdOutlineCancel
                                                    onClick={context.upDate.bind(this, cartItem.id)}
                                                    onChange={(e) => {
                                                        cartItem.quantity = e.target.value;
                                                        console.log(cartItem.quantity);
                                                        return;
                                                    }}
                                                />
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </Box>
                            ))}
                        </Stack> */}
                    </Stack>
                    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="40%" marginTop="50px">
                        <Heading size="md">Order Summary</Heading>
                        <Stack spacing="6">
                            <Flex justify="space-between">
                                <Text fontSize="lg" fontWeight="semibold">
                                    Total:
                                </Text>
                                <Text fontSize="lg" fontWeight="bold">
                                    $ {total}
                                </Text>
                            </Flex>
                        </Stack>
                        <Button colorScheme="green" size="lg" fontSize="xl">
                            Checkout
                        </Button>
                        <Flex direction="column" align="center" flex="1">
                            <HStack mt="6" fontWeight="semibold">
                                <p>or</p>
                                <NavLink to="/" color="blue.500">
                                    Continue shopping
                                </NavLink>
                            </HStack>
                        </Flex>
                    </Stack>
                </Stack>
            </Box>
        </React.Fragment>
    );
}

export default Cart;
 /*

 cho tôi một đoạn code mẫu về trang ShoppingCart sau khi người dùng đã login, dữ liệu cart được lấy từ api, đoạn code bằng react và chakra ui

import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Flex, Divider, VStack } from '@chakra-ui/react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu giỏ hàng
    // Ví dụ: axios.get('/api/shopping-cart').then(response => setCartItems(response.data));
    // Chú ý: Thay thế đoạn mã trên bằng cách gọi API thực tế của bạn để lấy dữ liệu giỏ hàng
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Your Shopping Cart
      </Text>
      <VStack spacing={4} align="stretch">
        {cartItems.map(item => (
          <Box key={item.id} p={4} borderWidth={1} borderColor="gray.200" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">
              {item.name}
            </Text>
            <Text>${item.price}</Text>
            // Thêm các thông tin khác về sản phẩm
            </Box>
            ))}
          </VStack>
          <Divider my={4} />
          <Flex justify="flex-end">
            <Button colorScheme="green" size="lg">
              Checkout
            </Button>
          </Flex>
        </Box>
      );
    }
    
    export default ShoppingCart;
    
 */