import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdFacebook,
  MdOutlineEmail,
  MdMailOutline
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'

export default function ContactUs() {
  return (
    <Container bg="white.50" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.100"
          color="green.800"
          borderRadius="lg"
          m={{ sm: 5, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          fontSize='2xl'
        >  
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem >
                <Box >
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="green.800">
                    Fill up the form below to contact Us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="xl"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="green.800"
                        _hover={{ border: '2px solid green'}}
                        leftIcon={<MdPhone color="green.800" size="20px" />}>
                        +81-988888888
                      </Button>
                      <Button
                        size="xl"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="green.800"
                        _hover={{ border: '2px solid green' }}
                        leftIcon={<MdEmail color="green.800" size="20px" />}>
                        hello@abc.com
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" width='350px'>
                  <Box m={8} color="#0B0E3F" alignItems='center'>
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel fontSize='2xl'>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" size='1.5rem'/>
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel fontSize='2xl'>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" size='1.5rem'/>
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel fontSize='2xl'>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          fontSize='2xl'
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="gray.500" color="white" _hover={{bg:'green.800'}} fontSize='2xl'>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}


