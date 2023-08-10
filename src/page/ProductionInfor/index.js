import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as searchServices from '~/apiServices/searchService';
import axios from 'axios';
import { Grid, GridItem,Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';

function ProductionInfor(props) {
    const [callProducts, setCallProducts] = useState({});

    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setCallProducts(response.data);
            })
            .catch((error) => {
                console.error('xay ra loi', error);
            });
        setLoading(false)
    }, []);

    if(loading) {
        return <Text>Loading</Text>
    }

    return (
        <div>
            <h1> PRODUCTION INFOR PAGE</h1>
            <p> thong tin san pham</p>
            <div>{callProducts.phone}</div>
            <Grid  templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                    gap={[4, 4, 6]}>
                <GridItem minHeight={'500px'} bg='gray'>
                    <Img src='https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg'/>
                </GridItem>
                <GridItem>
                    <Text >Product name: {callProducts.name}</Text>
                    <Text> lorem   </Text>
                </GridItem>
            </Grid>
        </div>
    );
}

export default ProductionInfor;
