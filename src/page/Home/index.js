import AboutUs from '../AboutUs';
import Products from '../Products';
import Banner from '../components/Banner';
import Item from '../components/Item';
import { Box } from '@chakra-ui/react';
function Home() {
    return (
        <>
            <h2>Home page</h2>
            <Banner />
            <Box display={{ base: 'block', sm: 'grid' }} gridTemplateColumns="repeat(4,1fr)" gap={4} width="100%">
                <Item />
                <Item />
                <Item />
                <Item />
            </Box>
            <AboutUs />
            <Products />
            <AboutUs />
        </>
    );
}

export default Home;
