import { Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel, Box } from '@chakra-ui/react';
import Item from '../components/Item';
import { useLocation } from 'react-router-dom';
function PlantCatalog() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const defaultValue = searchParams.get('defaultValue')*1;
    const defaultIndex = defaultValue ? [defaultValue] : [0];
    return (
        <>
            <Accordion defaultIndex={defaultIndex} allowMultiple>
                <AccordionItem >
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" color="green.800">
                                FLOWER
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                   
                    <AccordionPanel pb={4}>
                        <Box
                            display={{ base: 'block', sm: 'grid' }}
                            gridTemplateColumns="repeat(4,1fr)"
                            gap={4}
                            width="100%"
                        >
                            
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                NON-FLOWERING
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Box
                            display={{ base: 'block', sm: 'grid' }}
                            gridTemplateColumns="repeat(4,1fr)"
                            gap={4}
                            width="100%"
                        >
                            <Item  name={'Large Monstera Delicosa'}                                                    
                                                    price={80}  
                                                    img={'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Monstera-Deliciosa_Large_Mexia_Black_Variant.jpg?v=1687366508&width=400'} />
                            <Item  name={'Faux Floor Cactus'} 

                                                    price={325}  
                                                    img={'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Faux_Variegated_Monstera_Large_Helena_Cream_Variant.jpg?v=1685669305&width=400'}/>
                            <Item  name={'Statement Maker Dou'} 
                                                    price={224}  
                                                    img={'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_StatementMakerDuo_Pallas_Cream_Variant.jpg?v=1690830964&width=400'}/>
                            <Item  name={'Kalanchoe Flapjack'} 
                                                    price={48}  
                                                    img={'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Kalanchoe-Flapjack_Small_Hyde_Mint_Variant.jpg?v=1691008744&width=400'}/>
                        </Box>
                        
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                INDOOR
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box
                            display={{ base: 'block', sm: 'grid' }}
                            gridTemplateColumns="repeat(4,1fr)"
                            gap={4}
                            width="100%"
                        >
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                OUTDOOR
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box
                            display={{ base: 'block', sm: 'grid' }}
                            gridTemplateColumns="repeat(4,1fr)"
                            gap={4}
                            width="100%"
                        >
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                SUCCULENTS
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box
                            display={{ base: 'block', sm: 'grid' }}
                            gridTemplateColumns="repeat(4,1fr)"
                            gap={4}
                            width="100%"
                        >
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                MEDICINAL
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box
                            display={{ base: 'block', sm: 'grid' }}
                            gridTemplateColumns="repeat(4,1fr)"
                            gap={4}
                            width="100%"
                        >
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default PlantCatalog;
