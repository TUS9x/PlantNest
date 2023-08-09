import PropTypes from 'prop-types';
import Header from '../component/Header';
import Sidebar from '~/layouts/component/Sidebar';
import Footer from '../component/Footer';


function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer/>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
