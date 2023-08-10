import React, { useState } from 'react';
import { Box, VStack, Input, Button, FormControl, FormLabel, Heading } from '@chakra-ui/react';

function LoginForm() {
    const [islogin, setIslogin] = useState(true);
    const result = islogin ? 'Resigter' : 'Login';
    return (
        <div position="relative">
            {islogin === true ? (
                <Box p={2} minHeight={'1000px'} width={{ base: '100%', lg: '800px' }} mx={'auto'}>
                    <VStack spacing={4}>
                        <Heading as="h2" size="lg">
                            Login
                        </Heading>
                        <FormControl id="username">
                            <FormLabel fontSize="lg">User Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel fontSize="lg">Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel fontSize="lg">Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Button colorScheme="teal" type="submit">
                            Login
                        </Button>
                    </VStack>
                </Box>
            ) : (
                <Box p={2} minHeight={'1000px'} width={{ base: '100%', lg: '800px' }} mx={'auto'}>
                    <VStack spacing={4}>
                        <Heading as="h2" size="lg">
                            Register
                        </Heading>
                        <FormControl id="username">
                            <FormLabel fontSize="lg">User Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel fontSize="lg">Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel fontSize="lg">Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Button colorScheme="teal" type="submit">
                            Register
                        </Button>
                    </VStack>
                </Box>
            )}

            <Button
                position="absolute"
                top="30%"
                left="50%"
                transform="translate(-50%, -50%)"
                onClick={() => setIslogin(!islogin)}
            >
                {result}
            </Button>
        </div>
    );
}

export default LoginForm;
