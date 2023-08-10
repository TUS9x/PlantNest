import { NavLink } from 'react-router-dom';
import { Flex, Box, Button, useDisclosure, Icon } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { CiUser, CiShoppingCart } from 'react-icons/ci';

import Search from './Search';
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box width="100%" bg="green.800">
            <Flex
                maxWidth={'1440px'}
                mx={'auto'}
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1rem"
                color="gray.50"
            >
                {/* Toggle button cho responsive */}
                <Button
                    onClick={isOpen ? onClose : onOpen}
                    size={'lg'}
                    colorScheme="gray"
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    order={[1, 0]}
                >
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </Button>
                {/* LOGO */}
                <Box
                    fontSize={{ base: '2xl', lg: '4xl' }}
                    fontWeight="bold"
                    padding={{ base: '1rem' }}
                    order={[2, 1, 1]}
                >
                    <NavLink to="/">PLANTNEST</NavLink>
                </Box>

                {/* Danh sách các mục menu */}
                <Box
                    display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    justifyContent={{ base: 'center', md: 'end' }}
                    alignItems="center"
                    // flexGrow={1}
                    fontWeight={{ base: '400' }}
                    fontSize={{ base: '3xl', md: '3xl' }}
                    padding={{ md: '1rem' }}
                    color="white"
                    order={[0, 2]}
                >
                    <Flex
                        align={{ base: 'left' }}
                        justify={{ base: 'center', md: 'flex-end' }}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={8}
                    >
                        <Box
                            _hover={{ fontWeight: 'bold' }}
                            cursor="pointer"
                            padding={{ base: '1rem' }}
                            minWidth="100px"
                        >
                            <NavLink to="/">Home</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'bold' }}
                            cursor="pointer"
                            padding={{ base: '1rem' }}
                            minWidth="140px"
                        >
                            <NavLink to="/plantcatalog">Plant Catalog</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'bold' }}
                            cursor="pointer"
                            padding={{ base: '1rem' }}
                            minWidth="110px"
                        >
                            <NavLink to="/aboutus">About Us</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'bold' }}
                            cursor="pointer"
                            padding={{ base: '1rem' }}
                            minWidth="110px"
                        >
                            <NavLink to="/feedback">Feed Back</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'bold' }}
                            cursor="pointer"
                            padding={{ base: '1rem' }}
                            minWidth="120px"
                        >
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </Box>
                    </Flex>
                </Box>
                {/* SEARCH */}
                <Box order={[4, 3]} width={{ base: '100%', md: 'auto', lg: '320px' }}>
                    <Search />
                </Box>
                {/* ACTION */}
                <Box display={{ base: 'flex', md: 'block' }} order={[3, 4]}>
                    <Flex>
                        {/* <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            <Icon as={CiSearch} boxSize={{ base: '3rem', md: '3rem' }} />
                        </Box> */}
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            <NavLink to="/login">
                                <Icon as={CiUser} boxSize={{ base: '3rem', md: '3rem' }} />
                            </NavLink>
                        </Box>
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            <NavLink to="/cart">
                                <Icon as={CiShoppingCart} boxSize={{ base: '3rem', md: '3rem' }} />
                            </NavLink>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default Header;
