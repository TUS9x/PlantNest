import { 
    Image, 
    Box, 
    Stack,  
    Card,
    CardBody,
    Heading,  
    Button,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
function Banner() {
    return (
    <>
    <Card
    direction='row'
    overflow='hidden'
    variant='outline'
    borderStyle='none'
    >
        <Stack width={{ base: '40%' , sm: '50%' }}>
            <CardBody>
                <Heading fontSize={{base:'3xl', sm:'6xl'}} fontWeight='normal' paddingTop='5rem'>
                    Best house <br/>
                    plants varieties
                </Heading>
                <br/><br/>
                <Button colorScheme='teal' variant='outline'>
                    <Box fontWeight='bold' fontSize='lg'>
                        <NavLink> Shop now</NavLink>
                    </Box>
                </Button>
            </CardBody>
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
