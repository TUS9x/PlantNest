import { 
    Flex, 
    Image,
    CardFooter,
    Box,
    Card,
    CardBody
 } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart,MdOutlineFavoriteBorder} from 'react-icons/md';
function Item(props) {
    return (
        <>
        <Card width='300px'>
            <CardBody>
                <Image
                    objectFit='cover'
                    src='https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8='
                    alt='Item'
                    width='300px'
                />
            </CardBody>
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                width='300px'
            >
                <Flex width='300px' paddingX='5px'>
                    <Box flex='1' variant='ghost' width='10px'>
                        <Box fontSize='1.3rem'>
                        Name: {props.name}
                        </Box>
                        <Box fontWeight='bold'>
                        $ {props.price}
                        </Box>
                    </Box>
                    <MdOutlineFavoriteBorder fontSize='3rem' color="green"/>
                    <MdOutlineAddShoppingCart fontSize='3rem'color="green"/>
                </Flex>   
            </CardFooter>
        </Card>
        </>
    ) ;
}

export default Item;
