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
                justify={{base:'center',md:"space-between"}}
                wrap="wrap"
             
                
                bg="gray.50"
                marginX={{ base: '', md: '54px' }}
            >
                <Grid
                    bg="gray"
                    templateColumns={{sm:'repeat(1,1fr)' ,md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={[4, 6]}
                    paddingY={{base:'4rem',md:'0px'}}
                    height={{ base: '', md: '159px' }}
                    alignItems={'center'}
                    padding="5rem"
                >
                    <GridItem
                        fontSize={{ base: '2xl', md: '4xl' }}
                        fontWeight="bold"
                        display={'flex'}
                        justifyContent={{base:'center',md:'start'}}
                    >
                        PLANTNEST
                    </GridItem>

                    <GridItem
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={{base:'column', md:'row'}}
                        justify={'center'}
                        alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }}
                        fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '2xl', xl: '2xl' }}
                        gap={6}
                    >
                        <Box>
                            <NavLink to="/">Help</NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/">Contact us</NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/">Privacy & Terms</NavLink>
                        </Box>
                    </GridItem>

                    <GridItem display={'flex'} justifyContent={{base:'center', md:'end'}}>
                        <Box px='4'>
                            <ImTwitter fontSize={'2rem'}/>
                        </Box>
                        <Box px='2'>
                            <ImFacebook fontSize={'2rem'}/>
                        </Box>
                        <Box px='2'>
                            <ImInstagram fontSize={'2rem'}/>
                        </Box>
                    </GridItem>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
