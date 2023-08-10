import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as searchServices from '~/apiServices/searchService';
import axios from 'axios';
import { Grid, GridItem,Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';

function ProductionInfor(props) {
    const [callProducts, setCallProducts] = useState([]);

    const { productionInfor } = useParams();
    console.log(productionInfor);
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${productionInfor}`)
            .then((response) => {
                setCallProducts(response.data);
            })
            .catch((error) => {
                console.error('xay ra loi', error);
            });
    }, []);
    return (
        <div>
            <h1> PRODUCTION INFOR PAGE</h1>
            <p> thong tin san pham</p>
            <div>{callProducts.phone}</div>
            <Grid  templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                    gap={[4, 4, 6]}>
                <GridItem minHeight={'500px'} bg='gray'>
                    <Img src='https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg'/>
                    <Img src='https://image-us.eva.vn/upload/3-2022/images/2022-08-26/image1-1661495539-834-width600height550.jpg'/>
                    <Img src='https://kenh14cdn.com/203336854389633024/2022/7/2/photo-1-16567431272991083977562.jpeg'/>
                    <Img src='https://kenh14cdn.com/203336854389633024/2022/7/2/photo-1-16567431272991083977562.jpeg'/>
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
