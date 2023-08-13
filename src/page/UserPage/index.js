import {
  Box,
  Container,
  Text,
  Avatar,
  Button,
  Flex,
  Spacer,
  VStack,
  Divider,
  Grid,
  GridItem,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useState } from 'react';
function UserPage(user) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEditOpen = () => {
    setIsEditOpen(true);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleSaveChanges = () => {
    // You can add logic here to save the edited data to your backend
    // For now, let's just update the state with the edited values
    user.name = editedName;
    user.email = editedEmail;
    setIsEditOpen(false);
  };
  return (
    <>
        <Box bg="gray.100" py={4}>
          <Container maxW="container.lg">
            <Grid templateColumns="1fr 3fr" gap={6}>
              <GridItem>
                <Avatar 
                  src={user.avatarUrl} 
                  name={user.name} 
                  size="2xl" />
              </GridItem>
              <GridItem>
                <VStack align="stretch" spacing={4}>
                  <Heading size="lg">
                    {/* {user.name} */}
                    <Text fontSize="lg" fontWeight="medium">
                    {/* {user.email} */}
                     </Text>
                  </Heading>
                  <Text fontSize="lg" fontWeight="medium">
                    {/* {user.bio} */}
                  </Text>
                  <Accordion defaultIndex={[]} allowMultiple>
                    <AccordionItem >
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="center" color="green.800">
                                <Button colorScheme="none" size="md" color='green.800' onClick={handleEditOpen}>
                                  Edit Profile
                                </Button> 
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        <AccordionPanel pb={4} isOpen={isEditOpen} onClose={handleEditClose}>
                            <Box
                                display={{ base: 'flex'}} flexDirection={'column'}
                                gridTemplateColumns="repeat(4,1fr)"
                                gap={4}
                                width="100%"
                            >                   
                                <FormControl>
                                  <FormLabel>Name</FormLabel>
                                  <Input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                                </FormControl>
                                <FormControl mt={4}>
                                  <FormLabel>Email</FormLabel>
                                  <Input value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                                </FormControl>
                                <Box>
                                  <Button colorScheme="blue" onClick={handleSaveChanges}>
                                    Save Changes
                                  </Button>
                                  <Button variant="ghost" onClick={handleEditClose}>
                                    Cancel
                                  </Button>
                                </Box>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                <Button colorScheme="green" size="md">
                                View Orders
                                </Button>
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

                        </Box>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="center" fontWeight="bold" color="green.800">
                                <Button colorScheme="none" size="md" color='green.800'>
                                  Wishlist
                                </Button>
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
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                  </Accordion>               
                </VStack>
              </GridItem>
            </Grid>
            <Divider my={4} />
            <Divider my={4} />
          </Container>
        </Box>
    </>
  )
}

export default UserPage;
