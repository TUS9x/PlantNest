import PropTypes from 'prop-types';
import Header from '../component/Header';
import Sidebar from '~/layouts/component/Sidebar';
import Footer from '../component/Footer';
import { Box } from '@chakra-ui/react';

function DefaultLayout({ children }) {
    return (
        <Box>
            <Header />
            <Box>{children}</Box>
            <Footer />
        </Box>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
