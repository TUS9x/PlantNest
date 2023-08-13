import { NavLink } from 'react-router-dom';
import AboutUs from '../AboutUs';
import PlantCatalog from '../PlantCatalog';
import NewProducts from '../Products/newProducts';
import Banner from '../components/Banner';
function Home() {
    return (
        <>
            <Banner />
            <NavLink to='/aboutus'><AboutUs /></NavLink>
            <NewProducts />
            <PlantCatalog/>
        </>
    );
}

export default Home;
