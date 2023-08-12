import { Flex, Image, CardFooter, Box, Card, CardBody, useToast } from '@chakra-ui/react';
import { MdOutlineAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useAppContext } from '~/App';
import LoginModal from '~/component/LoginModal';

function Item(props) {
    const toast = useToast();
    const { isLogin } = useAppContext()
    return (
        <>
            <Card width="300px">
                <CardBody>
                    <Image
                        objectFit="cover"
                        src={props.img}
                        alt="Item"
                        width="300px"
                    />
                </CardBody>
                <CardFooter justify="space-between" flexWrap="wrap" width="300px">
                    <Flex width="300px" paddingX="0.2rem">
                        <Box flex="1" variant="ghost" width="full">
                            <Box fontSize="0.9rem">{props.name}</Box>
                            <Box fontWeight="bold">$ {props.price}</Box>
                        </Box>
                        <MdOutlineFavoriteBorder
                            fontSize="2rem"
                            color="green"
                            onClick={() =>
                                toast({
                                    title: 'Favorite ADD',
                                    description: '',
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                        />
                        {isLogin ?
                            <MdOutlineAddShoppingCart
                            fontSize="2rem"
                            color="green"
                            onClick={() =>
                                toast({
                                    title: 'Shopping ADD',
                                    description: '',
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                        /> : <LoginModal>
                                <MdOutlineAddShoppingCart
                                    fontSize="2rem"
                                    color="green"
                                />
                            </LoginModal>
                             }

                    </Flex>
                </CardFooter>
            </Card>
        </>
    );
}

export default Item;
