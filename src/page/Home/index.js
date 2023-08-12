import { NavLink } from 'react-router-dom';
import AboutUs from '../AboutUs';
import PlantCatalog from '../PlantCatalog';
import Products from '../Products';
import Banner from '../components/Banner';
function Home() {
    return (
        <>
            <Banner />
            <NavLink to='/aboutus'><AboutUs /></NavLink>
            <Products />
            <PlantCatalog/>
        </>
    );
}

export default Home;
