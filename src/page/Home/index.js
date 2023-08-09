import AboutUs from "../AboutUs";
import Banner from "../components/Banner";
import Item from "../components/Item";
import { Grid, GridItem, Box } from "@chakra-ui/react";
function Home() {
    return (
        <>
        <h2>Home page</h2>
        <Banner/>
        <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </Box>            
        <AboutUs />
        </>
    );
}

export default Home;
