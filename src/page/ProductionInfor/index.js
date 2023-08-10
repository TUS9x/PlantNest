import { useParams } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image, Input,
    InputGroup, InputLeftAddon, InputRightAddon,
    Stack,
    Text,
} from '@chakra-ui/react';
import { thousand } from '~/helpers/thousand';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function ProductionInfor() {
    const { id } = useParams();
    const [amount, setAmount] = useState(1)
    const onDecrease = () => {
        setAmount((prev) => {
            if(prev > 1) {
                return prev - 1
            }
            return 0
        })
    }
    const onIncrease = () => {
        setAmount((prev) => prev + 1)
    }
    return (
        <Stack py={4} w={'full'}>
            <Flex flexWrap={'wrap'} gap={4}>
                <Box w={{ lg: '300px', base: 'full' }} flexShrink={0}>
                    <Image
                        objectFit='cover'
                        src='https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8='
                        alt='Item'
                    />
                </Box>
                <Stack px={{ lg: 0, base: 4 }} flex={1} spacing={4}>
                    <Heading>Tên sản phẩm {id}</Heading>
                    <Text fontSize={'4xl'} color={'red.400'}>{thousand(120000)}đ</Text>
                    <Text>Mô tả sản phẩm</Text>
                    <InputGroup>
                        <InputLeftAddon>
                            <Button variant={'unstyled'} onClick={onDecrease}>-</Button>
                        </InputLeftAddon>
                        <Input w={'60px'} textAlign={'center'} value={amount}/>
                        <InputRightAddon>
                            <Button variant={'unstyled'} onClick={onIncrease}>+</Button>
                        </InputRightAddon>
                    </InputGroup>
                    <HStack spacing={2} align={'stretch'} w={'full'}>
                        <Button colorScheme={'green'} w={{ lg: 'auto', base: 'full' }} leftIcon={<AddIcon />}>Thêm vào giỏ hàng</Button>
                        <Button colorScheme={'purple'} w={{ lg: 'auto', base: 'full' }} leftIcon={<AddIcon/>}>Wishlist</Button>
                    </HStack>
                </Stack>
            </Flex>
        </Stack>

    );
}

export default ProductionInfor;
