import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

function AboutUs() {
    return (
        <Box padding={{ md: '5rem' }}>
            <Flex
                flexDirection={{ base: 'column', sm: 'row' }}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'4'}
            >
                <Accordion defaultIndex={[2]} allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <Box
                                flexBasis={{ base: '50%', md: '10%' }}
                                display={'flex'}
                                justifyContent={{ base: 'start', md: 'center' }}
                            >
                                <Text fontSize={{ base: '0.8rem', md: '1rem' }} fontWeight={'500'} color={'#000'}>
                                    OUR SHOP
                                </Text>
                            </Box>
                            <Box
                                display={'flex'}
                                justifyContent="space-around"
                                alignItems={{ base: 'flex-end', md: 'center' }}
                            >
                                <Box flexBasis={{ base: '70%', md: '80%' }}>
                                    <Text
                                        fontSize={{ base: '1rem', md: '2rem' }}
                                        fontWeight={'500'}
                                        color={'#000'}
                                        align="left"
                                    >
                                        Featured with Happy Plant Customers
                                    </Text>
                                    <Text
                                        fontSize={{ base: '1rem', md: '2rem' }}
                                        fontWeight={'500'}
                                        color={'#000'}
                                        align="left"
                                    >
                                        We Guarantee a Healthy Delivery!
                                    </Text>
                                </Box>
                            </Box>
                            <Box
                                flexBasis="20%"
                                as="span"
                                flex="1"
                                textAlign="center"
                                fontWeight="bold"
                                color="green.800"
                            >
                                <Button
                                    width="6rem"
                                    height="2rem"
                                    css={{ backgroundColor: 'black', color: 'white' }}
                                    rightIcon={<AccordionIcon />}
                                >
                                    See all
                                </Button>
                            </Box>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Box>
                                We’re your online houseplant destination. We offer a wide range of houseplants and
                                accessories shipped directly from our greenhouse to yours!
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Box flexBasis="30%">
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow="hidden"
                        variant="outline"
                        borderStyle={'none'}
                    >
                        <Image
                            objectFit="cover"
                            maxWidth={{ base: '100%', sm: '400px' }}
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
