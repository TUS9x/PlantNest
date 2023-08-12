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
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                FLOWER
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
