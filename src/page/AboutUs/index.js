import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

function AboutUs() {
    return (
        <Box padding={{md:"5rem"}}>
            <Flex flexDirection={{base:'column', md:'row'}} alignItems={'center'}  justifyContent={'space-between'} gap={'4'}>
                <Box flexBasis={{base:'100%',md:"10%"}} display={'flex'} justifyContent={{base:'start',md:'center'}}>
                    <Text fontSize={'1.25rem'} fontWeight={'500'} color={'#000'}>OUR SHOP</Text>
                </Box>
                <Box display={'flex'} justifyContent={'space-around'} alignItems={{base:'flex-end',md:'center'}}>
                    <Box flexBasis={{base:'70%',md:"60%"}}>
                        <Text fontSize={'3rem'} fontWeight={'500'} color={'#000'}>Here are the best seller</Text>
                        <Text fontSize={'3rem'} fontWeight={'500'} color={'#000'}>from our varieties</Text> 
                    </Box>
                    <Box flexBasis={{base:'30%',md:"40%"}}>
                        <Button width={'8.375rem'} height={'2.5rem'} css={{ backgroundColor: "black", color: "white" }}>See all</Button>
                    </Box>
                </Box>
                <Box flexBasis="40%">
                    <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline" borderStyle={'none'}>
                        <Image
                            objectFit="cover"
                            maxWidth={{ base: '100%', sm: '368px' }}
                            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="Caffe Latte"
                        />
                    </Card>
                </Box>
            </Flex>
        </Box>
    );
}

export default AboutUs;
