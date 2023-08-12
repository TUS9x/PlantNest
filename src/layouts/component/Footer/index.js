import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ImTwitter, ImFacebook, ImInstagram } from 'react-icons/im';

function Footer() {
    return (
        <Box width={'100%'}  bg="green.800" >
            <Box
                maxWidth={'1400px'}
                height={{ base: '', md: '159px' }}
                // as="nav"
                display={'flex'}
                align="center"
                justify={{ base: 'center', md: 'space-between' }}
                wrap="wrap"
                px={{ xl: 0, base: 4 }}
                maxWidth={'1440px'}
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
                        fontWeight="bold"
                        display={'flex'}
                        justifyContent={{ base: 'center', md: 'start' }}
                    >
                        <Box
                            fontSize={{ base: '2xl', lg: '3xl' }}
                            fontWeight="bold"
                            padding={{ base: '0.5rem' }}
                            order={[2, 1, 1]}
                            width='200px'
                        >
                            <NavLink to="/" bg='gray.400'> <Image  objectFit={'cover'} src="../nest-white5.png"/></NavLink>
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
