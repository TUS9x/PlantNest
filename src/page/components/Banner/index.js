import { 
    Image, 
    Box, 
    Stack, 
    Flex, 
    Card,
    CardBody,
    Heading,
    Text,
    CardFooter,
    Button
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
function Banner() {
    return (
    <>
    <h1> Banner PAGE</h1>
    <Card
    direction='row'
    overflow='hidden'
    variant='outline'
    borderStyle='none'
    >
        <Stack width={{ base: '40%' , sm: '50%' }}>
            <CardBody>
                <Heading fontSize={{base:'2xl', sm:'6xl'}} fontWeight='normal'>
                    Best house <br/>
                    plants varieties
                </Heading>
                
            </CardBody>
            <CardFooter>
            <Button colorScheme='teal' variant='outline'>
                    <Box fontWeight='bold' fontSize='xl'>
                        <NavLink> Shop now</NavLink>
                    </Box>
            </Button>    
            </CardFooter>
        </Stack>
        <Image
        objectFit='cover'
        width={{ base: '60%', sm: '50%' }}
        src='https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8='
        alt='Best house plants varieties'
        />
    </Card>  

    </>
);
}

export default Banner;
