import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, GridItem, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { Button, Input, Flex, Box, Image, HStack, Stack, AspectRatio } from '@chakra-ui/react';

import RatingStars from './RatingStar';
import { AddIcon } from '@chakra-ui/icons';

const Wrapper = ({ children, ...props}) => {
   return <Stack
       p={2}
        w={{ xl: '500px', lg: '50%', base: 'full' }}
        {...props}>
       {children}
    </Stack>
}

const description = 'Botanical Name: Philodendron Monstera deliciosa\n' +
    'Common Names: Swiss Cheese or Hurricane Plant, Fruit Salad Plant , Monstera\n' +
    'Description: Native to the tropical forests of Central and South America, these plants have glossy, heart shaped leaves which develops its unique splits in its maturity. It is a climbing, evergreen perennial vine that is perhaps most noted for its large perforated leaves on thick plant stems and its long cord-like aerial roots.\n' +
    ' \n' +
    '\n' +
    '***Bare root plants will ship without a pot and soil. You will NOT receive a nursery pot or soil with a bare root plant.*** Read: Bareroots 101\n' +
    '\n' +
    ' \n' +
    '\n' +
    '*due to COVID inventory issues on the raw materials, planters are not shipped with the saucer.'

function ProductionInfor(props) {
    const [callProducts, setCallProducts] = useState({});
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [activeButton, setActiveButton] = useState(null);
    const { id } = useParams();

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName === activeButton ? null : buttonName);
    };
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://52.253.98.98:8080/api/products/${id}`)
            .then((response) => {
                setCallProducts(response.data);
                console.log('data tra ve',response.data)
            })
            .catch((error) => {
                console.error('xay ra loi', error);
            });
        setLoading(false);
    }, []);

    if (loading) {
        return <Text>Loading</Text>;
    }
    const src = [
        'https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg',
        'https://caycanhhanoi.vn/wp-content/uploads/2020/08/cay-tung-bong-lai-hop-menh-thuy-375x500.jpg',
        'https://tromoi.com/uploads/members/hnlha/tung%20bong%20lai.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_T208k5OcHfsJuK632ZZ6QH9uezG-kaFzsjRR117GuAYsvCjHVxjA_K93-coyBKBsmg&usqp=CAU',
        'https://caycanhmienbac.com/wp-content/uploads/2020/10/tung-bong-lai.jpg',
        'https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg',
        'https://caycanhhanoi.vn/wp-content/uploads/2020/08/cay-tung-bong-lai-hop-menh-thuy-375x500.jpg',
        'https://tromoi.com/uploads/members/hnlha/tung%20bong%20lai.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_T208k5OcHfsJuK632ZZ6QH9uezG-kaFzsjRR117GuAYsvCjHVxjA_K93-coyBKBsmg&usqp=CAU',
        'https://caycanhmienbac.com/wp-content/uploads/2020/10/tung-bong-lai.jpg',
        'https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg',
        'https://caycanhhanoi.vn/wp-content/uploads/2020/08/cay-tung-bong-lai-hop-menh-thuy-375x500.jpg',
        'https://tromoi.com/uploads/members/hnlha/tung%20bong%20lai.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_T208k5OcHfsJuK632ZZ6QH9uezG-kaFzsjRR117GuAYsvCjHVxjA_K93-coyBKBsmg&usqp=CAU',
        'https://caycanhmienbac.com/wp-content/uploads/2020/10/tung-bong-lai.jpg',
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hinhanh, setHinhanh] = useState(src[1]);
    const handleImg = (src) => {
        setHinhanh(src);
    };
    return <Flex flexWrap={'wrap'}>
        <Wrapper aria-label={'image'} spacing={4}>
            <AspectRatio maxW='400px' ratio={4 / 3}>
                <Image
                    objectFit='cover'
                    src={hinhanh} />
            </AspectRatio>
            <Flex flexWrap={'wrap'}>
                {src.map((item) => {
                    return <AspectRatio ratio={4 / 3} w={'100px'} m={1}s>
                        <Box borderWidth={1} p={1} rounded={8} onClick={() => handleImg(item)}>
                            <Image objectFit={'cover'} src={item} key={JSON.stringify(item)} />
                        </Box>
                    </AspectRatio>;
                })}
            </Flex>
        </Wrapper>
        <Flex flexWrap={'wrap'} w={{ xl: '66.6%', lg: '50%', base: 'full' }} flexDirection={{ xl: 'row', lg: 'column'}} aria-label={'description'} flex={1}>
            <Wrapper spacing={4} w={{ xl: '50%', lg: 'full', base: 'full' }}>
                <Text fontSize={'4xl'} fontWeight={'bold'}>
                    Product name: {callProducts.prodName}
                </Text>
                <Text fontSize={'3xl'} fontWeight={'bold'}>
                    {' '}
                    Price: $ {callProducts.prodPrice}
                </Text>
                <RatingStars />
                <Text>
                    Discription: {callProducts.prodDesc}
                </Text>
                {/*<Box*/}
                {/*    dangerouslySetInnerHTML={{ __html: description }}*/}
                {/*/>*/}
            </Wrapper>
            <Wrapper w={{ xl: '50%', lg: 'full', base: 'full' }} spacing={4}>
                <HStack>
                    {
                        ['S', 'M', 'L'].map(size => {
                            return <Button
                                width={8}
                                colorScheme={activeButton === 'ButtonS' ? 'green' : 'gray'}
                                onClick={() => handleButtonClick(size)}
                            >
                                {size}
                            </Button>
                        })
                    }
                </HStack>
                <Flex direction={'row'}>
                    <Box border={'1px solid black'} borderRadius={'8px'}>
                        <Button border={'none'} bg={'transparent'} onClick={() => handleDecrease()}>
                            -
                        </Button>
                        <Input
                            border={'none'}
                            width={6}
                            textAlign={'center'}
                            variant='unstyled'
                            type='number'
                            value={quantity}
                        />
                        <Button border={'none'} bg={'transparent'} onClick={() => setQuantity(quantity + 1)}>
                            +
                        </Button>
                    </Box>
                </Flex>
                <Button colorScheme={'blue'} leftIcon={<AddIcon/>}>
                    Add to card
                </Button>
            </Wrapper>
        </Flex>
    </Flex>;
}

export default ProductionInfor;
