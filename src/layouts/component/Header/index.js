import { NavLink } from 'react-router-dom';
import { 
    Flex, 
    Stack,
    Box, 
    Button, 
    useDisclosure,
    Icon } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { CiUser,CiSearch, CiShoppingCart} from 'react-icons/ci';
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box width='100%' bg="green.800">
            <Flex
                maxWidth={'1440px'}
                mx={'auto'}
                as="nav"
                align='center'
                justify="space-between"
                wrap="wrap"
                padding="1rem"
                color='gray.50'
                
            >
    
                <Button
                    onClick={isOpen ? onClose : onOpen}
                    size={'lg'}
                    colorScheme="gray"
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                >
                    {isOpen ? <CloseIcon /> :<HamburgerIcon />}
                </Button>
                <Box fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" padding={{ base: '1rem' }}>
                    <NavLink to="/">PLANTNEST</NavLink>
                </Box>
                {/* Toggle button cho responsive */}
                
    
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
                    color='white'
                >
                    
                    <Flex
                        align={{ base: 'left' }}
                        justify={{ base: 'center', md: 'flex-end' }}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={8}
                    >
                        <Box _hover={{ fontWeight: 'bold' }} cursor="pointer" padding={{ base: '1rem' }} minWidth='100px'>
                                <NavLink to="/">Home</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor="pointer" padding={{ base: '1rem' }} minWidth='140px'>
                            <NavLink to="/plantcatalog">Plant Catalog</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor="pointer" padding={{ base: '1rem' }} minWidth='110px'>
                            <NavLink to="/aboutus">About Us</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor="pointer" padding={{ base: '1rem' }}minWidth='110px'>
                            <NavLink to="/feedback">Feed Back</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor="pointer" padding={{ base: '1rem' }}minWidth='120px'>
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </Box>
                    </Flex>
                </Box>
                <Box  display={{base:'flex',md:'block'}}>
                    <Flex>
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            
                                <Icon as={CiSearch} boxSize={{base:'3rem', md:'3rem'}} />
                            
                        </Box>
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            <NavLink to='/login' >
                                <Icon as={CiUser} boxSize={{base:'3rem', md:'3rem'}} />
                            </NavLink>
                        </Box>
                        <Box _hover={{ bg: 'Green.700' }} cursor="pointer" padding={{ base: '0.5rem' }}>
                            <NavLink to='/cart'>
                                <Icon as={CiShoppingCart} boxSize={{base:'3rem', md:'3rem'}}/>
                            </NavLink>
                        </Box> 
                    </Flex>  
                </Box>
            </Flex>
        </Box>
    );
}

export default Header;



