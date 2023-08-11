import { Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    Box

} from "@chakra-ui/react";
import Item from "../components/Item";
function PlantCatalog() {
    return (
        <>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Flowering
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Box>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Non-Flowering
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Box>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Indoor
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Outdoor
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Box>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Succulents
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Box>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Medicinal
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </>

    ) 
}

export default PlantCatalog;
