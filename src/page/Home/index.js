import AboutUs from '../AboutUs';
import Products from '../Products';
import Banner from '../components/Banner';
import Item from '../components/Item';
import { Box } from '@chakra-ui/react';
function Home() {
    return (
        <>
            <Banner />
            <AboutUs />
            <Products />
        </>
    );
}

export default Home;
