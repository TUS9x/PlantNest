import { NavLink } from 'react-router-dom';
import {
    Flex,
    Box,
    Button,
    useDisclosure,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image, Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { CiUser, CiShoppingCart } from 'react-icons/ci';
import { BiChevronDown } from 'react-icons/bi';
import Search from './Search';
import LoginModal from '~/component/LoginModal';
import { useAppContext } from '~/App';
import { useState } from 'react';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isLogin, setIsLogin } = useAppContext()

    const handleLogout = () => {
        localStorage.removeItem('isLogin')
        setIsLogin(false)
    }
    return (
        <Box width="100%" bg="green.800">
            <Flex
                maxWidth={'1400px'}
                mx={'auto'}
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                color="gray.50"
                paddingBottom={{ base: '4', md: '0' }}
                px={{ xl: 0, base: 4 }}
            >
                {/* Toggle button cho responsive */}
                <Button
                    onClick={isOpen ? onClose : onOpen}
                    colorScheme="gray"
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    order={[1, 0]}
                >
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </Button>
                {/* LOGO */}
                <Box
                    fontSize={{ base: '2xl', lg: '3xl' }}
                    fontWeight="bold"
                    paddingY= '0.5rem' 
                    order={[2, 1, 1]}
                    width='200px'
                >
                    <NavLink to="/" bg='gray.400'> <Image  objectFit={'cover'} src="../nest-white5.png"/></NavLink>
                </Box>
                {/* Danh sách các mục menu */}
                <Box
                    display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    justifyContent={{ base: 'center', md: 'end' }}
                    alignItems="center"
                    // flexGrow={1}
                    fontWeight={{ base: '400' }}
                    fontSize="lg"
                    color="white"
                    order={[0, 2]}
                >
                    <Flex
                        align={{ base: 'left' }}
                        justify={{ base: 'center', md: 'flex-end' }}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={7}
                    >
                        <Box
                            _hover={{ fontWeight: 'semibold' }}
                            cursor="pointer"
                            paddingY={{ base: '1rem' }}
                            paddingX={{ base: '0.4rem' }}
                            minWidth="110px"
                        >
                            <NavLink to="/">Home</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'semibold' }}
                            cursor="pointer"
                            paddingY={{ base: '1rem' }}
                            paddingX={{ base: '0.4rem' }}
                            minWidth="150px"
                            onMouseEnter={() => setIsMenuOpen(true)}
                            onMouseLeave={() => setIsMenuOpen(false)}
                        >
                            <Menu isOpen={isMenuOpen}>
                                <NavLink to="/plantcatalogy"                               
                                >
                                    <MenuButton
                                        rightIcon={<BiChevronDown />}
                                        bg="green.800"
                                        color="white.50"
                                        _hover={{ fontWeight: 'semibold' }}
                                        
                                    >
                                        Plant Catalog {isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                    </MenuButton>
                                </NavLink>
                                <MenuList color='green.800' 
                                    onMouseEnter={() => setIsMenuOpen(true)}
                                    onMouseLeave={() => setIsMenuOpen(false)}
                                    >
                                    <MenuItem onClick={() => setIsMenuOpen(false)}>
                                        <NavLink to='/products' >All Products</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={() => setIsMenuOpen(false)}><NavLink to={`/plantcatalogy?defaultValue=${0}`}>Flowering</NavLink></MenuItem>
                                    <MenuItem onClick={() => setIsMenuOpen(false)}><NavLink to={`/plantcatalogy?defaultValue=${1}`}>Non-flowering</NavLink></MenuItem>
                                    <MenuItem onClick={() => setIsMenuOpen(false)}><NavLink to={`/plantcatalogy?defaultValue=${2}`}>Indoor</NavLink></MenuItem>
                                    <MenuItem onClick={() => setIsMenuOpen(false)}><NavLink to={`/plantcatalogy?defaultValue=${3}`}>Outdoor</NavLink></MenuItem>
                                    <MenuItem onClick={() => setIsMenuOpen(false)}><NavLink to={`/plantcatalogy?defaultValue=${4}`}>Succulents</NavLink></MenuItem>
                                    <MenuItem onClick={() => setIsMenuOpen(false)}><NavLink to={`/plantcatalogy?defaultValue=${5}`}>Medicinal</NavLink></MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'semibold' }}
                            cursor="pointer"
                            paddingY={{ base: '1rem' }}
                            paddingX={{ base: '0.4rem' }}
                            minWidth="120px"
                        >
                            <NavLink to="/aboutus">About Us</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'bold' }}
                            cursor="pointer"
                            paddingY={{ base: '1rem' }}
                            paddingX={{ base: '0.4rem' }}
                            minWidth="110px"
                        >
                            <NavLink to="/feedback">Feed Back</NavLink>
                        </Box>
                        <Box
                            _hover={{ fontWeight: 'semibold' }}
                            cursor="pointer"
                            paddingY={{ base: '1rem' }}
                            paddingX={{ base: '0.4rem' }}
                            minWidth="120px"
                        >
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </Box>
                    </Flex>
                </Box>
                {/* SEARCH */}
                <Box order={[4, 3]} width={{ base: '100%', md: 'auto', lg: '240px' }}>
                    <Search />
                </Box>
                {/* ACTION */}
                <Box display={{ base: 'flex', md: 'block' }} mt={{ lg: 0, base: 4 }} order={[3, 4]}>
                    <Flex>
                        {/* <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            <Icon as={CiSearch} boxSize={{ base: '3rem', md: '3rem' }} />
                        </Box> */}
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer">
                            <NavLink to="/userpage">
                            {isLogin ?
                                <Menu>
                                    <MenuButton>
                                        <Avatar name={'Hoang Son'}/>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem color={'black'} onClick={handleLogout}>Log out</MenuItem>
                                    </MenuList>
                                </Menu>
                                 : <LoginModal>
                                <Icon as={CiUser} boxSize="2.5rem" />
                            </LoginModal>}
                            </NavLink>
                        </Box>
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer" pr="1rem">
                            <NavLink to="/cart">
                                <Box display="flex">
                                    <Icon as={CiShoppingCart} boxSize="2.5rem" />
                                    <Box>0</Box>
                                     
                                </Box>
                            </NavLink>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default Header;
