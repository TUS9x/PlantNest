import Home from '~/page/Home';
import ProductionInfor from '~/page/ProductionInfor';
import Cart from '~/page/Cart';
import SignUp from '~/page/SignUp';
import LogIn from '~/page/LogIn';
import Feedback from '~/page/Feedback';
import ContactUs from '~/page/ContactUs';
import PlantCatalog from '~/page/PlantCatalog';
import AboutUs from '~/page/AboutUs';
import Products from '~/page/Products';
import UserPage from '~/page/UserPage';

// import { HeaderOnly } from '~/layouts';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products/:id', component: ProductionInfor },
    { path: '/cart', component: Cart },
    { path: '/contactus', component: ContactUs },
    { path: '/signup', component: SignUp },
    { path: '/products', component: Products },
    { path: '/login', component: LogIn },
    { path: '/feedback', component: Feedback },
    { path: '/plantcatalogy', component: PlantCatalog },
    { path: '/aboutus', component: AboutUs },
    { path: '/userpage', component: UserPage}

    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
