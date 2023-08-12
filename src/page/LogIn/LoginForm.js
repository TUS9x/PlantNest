import React, { useState } from 'react';
import { Box, VStack, Input, Button, FormControl, FormLabel, Heading, Flex, Checkbox } from '@chakra-ui/react';
import { useFormik } from 'formik';

function LoginForm() {
    const [islogin, setIslogin] = useState(true);
    const result = islogin ? 'Dang ky ngay' : 'Da co tai khoan';

    const formik = useFormik({
        initialValues: {
            user: '',
            email: '',
            password: '',
            rememberMe: false,
        },
        // onSubmit: (values) => {
        //     alert(JSON.stringify(values, null, 2));
        // },
    });
    return (
        <div position="relative">
            {islogin === true ? (
                <Flex bg="gray.100" align={'center'} justify={'center'} h="50vh">
                    <Box
                        bg="white"
                        p={12}
                        minHeight={'300px'}
                        width={{ base: '100%', lg: '500px' }}
                        mx={'auto'}
                        rounded="md"
                    >
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>
                                <Heading as="h2" size="lg">
                                    Login
                                </Heading>
                                <FormControl>
                                    <FormLabel htmlFor="username" fontSize="lg">
                                        User Name
                                    </FormLabel>
                                    <Input
                                        id="username"
                                        name="user"
                                        type="text"
                                        variant={'filled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.user}
                                    />
                                </FormControl>
                                {/* <FormControl id="email">
                                    <FormLabel htmlFor="email" fontSize="lg">
                                        Email
                                    </FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        variant={'filled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                </FormControl> */}
                                <FormControl id="password">
                                    <FormLabel htmlFor="password" fontSize="lg">
                                        Password
                                    </FormLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        variant={'filled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                </FormControl>
                                <Checkbox
                                    id="rememberMe"
                                    name="rememberMe"
                                    onChange={formik.handleChange}
                                    isChecked={formik.values.rememberMe}
                                    colorScheme="green"
                                >
                                    Remember me?
                                </Checkbox>
                                <Button colorScheme="green" type="submit" width={'full'}>
                                    Login
                                </Button>
                                <Button width={'full'} onClick={() => setIslogin(!islogin)}>
                                    {result}
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </Flex>
            ) : (
                <Flex bg="gray.100" align={'center'} justify={'center'} h="50vh">
                    <Box
                        bg="white"
                        p={12}
                        minHeight={'300px'}
                        width={{ base: '100%', lg: '500px' }}
                        mx={'auto'}
                        rounded="md"
                    >
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>
                                <Heading as="h2" size="lg">
                                    Register
                                </Heading>
                                <FormControl>
                                    <FormLabel htmlFor="username" fontSize="lg">
                                        User Name
                                    </FormLabel>
                                    <Input
                                        id="username"
                                        name="user"
                                        type="text"
                                        variant={'filled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.user}
                                    />
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel htmlFor="email" fontSize="lg">
                                        Email
                                    </FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        variant={'filled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel htmlFor="password" fontSize="lg">
                                        Password
                                    </FormLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        variant={'filled'}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                </FormControl>
                                <Checkbox
                                    id="rememberMe"
                                    name="rememberMe"
                                    onChange={formik.handleChange}
                                    isChecked={formik.values.rememberMe}
                                    colorScheme="green"
                                >
                                    Remember me?
                                </Checkbox>
                                <Button colorScheme="green" type="submit" width={'full'}>
                                    Register
                                </Button>
                                <Button width={'full'} onClick={() => setIslogin(!islogin)}>
                                    {result}
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </Flex>
            )}

            {/* <Button
                position="absolute"
                top="30%"
                left="50%"
                transform="translate(-50%, -50%)"
                onClick={() => setIslogin(!islogin)}
            >
                {result}
            </Button> */}
        </div>
    );
}

export default LoginForm;
