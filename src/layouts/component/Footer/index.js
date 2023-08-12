import { Box, Grid, GridItem, HStack, Stack, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ImTwitter, ImFacebook, ImInstagram } from 'react-icons/im';

function Footer() {
    return (
        <Box width={'100%'}  bg="green.800" >
            <Box
                maxWidth={'1400px'}
                height={{ base: '', md: '170px' }}
                // as="nav"
                display={'flex'}
                align="center"
                justify={{ base: 'center', md: 'space-between' }}
                wrap="wrap"
                px={{ xl: 0, base: 4 }}
                mx={'auto'}
            >
                <Grid

                    templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={[4, 4, 6]}
                    paddingY={{ base: '4rem', md: '0px' }}
                    height={{ base: '', md: '159px' }}
                    alignItems={'center'}
                    width={'100%'}
                >
                    <GridItem
                        color="gray.50"
                        fontSize={{ base: 'xl', md: '2xl' }}                       
                        display={'flex'}
                        justifyContent={{ base: 'center', md: 'start' }}
                    >
                        <Box
                            fontSize={{ base: '2xl', lg: '3xl' }}
                            padding={{ base: '0.5rem' }}
                            order={[2, 1, 1]}
                            width='220px'
                        >
                            <NavLink to="/" 
                                fontWeight="bold" 
                                fontSize={{ base: '2xl', lg: '3xl' }}
                            > 
                                PLANT NEST 
                            </NavLink>
                            <Flex fontSize="14px" flexDirection='row' pl='1rem' >
                                <HStack display={'flex'} flexDirection='column' alignItems='flex-start' pr='1rem' pb='1rem' width='110px'>
                                    <Stack _hover={{ fontWeight: 'semibold' }}> <NavLink to='/products' >All Products</NavLink></Stack>
                                    <Stack _hover={{ fontWeight: 'semibold' }}><NavLink to={`/plantcatalogy?defaultValue=${0}`}>Flowering</NavLink></Stack>
                                    <Stack _hover={{ fontWeight: 'semibold' }}><NavLink to={`/plantcatalogy?defaultValue=${1}`}>Non-flowering</NavLink></Stack>
                                    <Stack _hover={{ fontWeight: 'semibold' }}><NavLink to={`/plantcatalogy?defaultValue=${2}`}>Indoor</NavLink></Stack>
                                </HStack>
                                <HStack display={'flex'} flexDirection='column' alignItems='flex-start' >
                                    <Stack _hover={{ fontWeight: 'semibold' }}><NavLink to={`/plantcatalogy?defaultValue=${3}`}>Outdoor</NavLink></Stack>
                                    <Stack _hover={{ fontWeight: 'semibold' }}><NavLink to={`/plantcatalogy?defaultValue=${4}`}>Succulents</NavLink></Stack>
                                    <Stack _hover={{ fontWeight: 'semibold' }}><NavLink to={`/plantcatalogy?defaultValue=${5}`}>Medicinal</NavLink></Stack>
                                </HStack>
                            </Flex>
                        </Box>
                    </GridItem>

                    <GridItem
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={{ base: 'column', md: 'row' }}
                        justify={'center'}
                        alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }}
                        fontSize="16px"
                        color="gray.50"
                        gap={6}
                        colSpan={{ md: 1, lg: 1 }}
                        whiteSpace={'nowrap'}
                        fontWeight="bold"
                    >
                        <Box  _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/">Home</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/aboutus" >About US</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/feedback">Feed Back</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/contactus" >Contact US</NavLink>
                        </Box>
                    </GridItem>

                    <GridItem display={'flex'} justifyContent={{ base: 'center', md: 'end' }}>
                        <Box px={{ base: '4', md: '2' }} color="gray.50">
                            <ImTwitter color="gray.50" fontSize={'2rem'} />
                        </Box>
                        <Box px={{ base: '4', md: '2' }} color="gray.50">
                            <ImFacebook fontSize={'2rem'} />
                        </Box>
                        <Box px={{ base: '4', md: '2' }} color="gray.50">
                            <ImInstagram fontSize={'2rem'} />
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;
