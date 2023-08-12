import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Header from '../component/Header';
import Footer from '../component/Footer';

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
