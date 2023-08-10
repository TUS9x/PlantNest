import { Box, Grid, GridItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ImTwitter, ImFacebook, ImInstagram } from 'react-icons/im';

function Footer() {
    return (
        <footer>
            <div
                maxWidth={'1440px'}
                height={{ base: '', md: '159px' }}
                mx={'auto'}
                // as="nav"
                display={'flex'}
                align="center"
                justify={{ base: 'center', md: 'space-between' }}
                wrap="wrap"
                marginX={{ base: '', md: '54px' }}
            >
                <Grid
                    bg="green.800"
                    templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={[4, 4, 6]}
                    paddingY={{ base: '4rem', md: '0px' }}
                    height={{ base: '', md: '159px' }}
                    alignItems={'center'}
                    padding="5rem"
                >
                    <GridItem
                        color="gray.50"
                        fontSize={{ base: '2xl', md: '4xl' }}
                        fontWeight="bold"
                        display={'flex'}
                        justifyContent={{ base: 'center', md: 'start' }}
                    >
                        PLANTNEST
                    </GridItem>

                    <GridItem
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={{ base: 'column', md: 'row' }}
                        justify={'center'}
                        alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }}
                        fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '2xl', xl: '2xl' }}
                        color="gray.50"
                        gap={6}
                        colSpan={{ md: 3, lg: 1 }}
                    >
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/">Home</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/">About US</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/">Feed Back</NavLink>
                        </Box>
                        <Box _hover={{ fontWeight: 'bold' }} cursor={'pointer'}>
                            <NavLink to="/">Contact US</NavLink>
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
            </div>
        </footer>
    );
}

export default Footer;
