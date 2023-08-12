import {
  Box,
  Container,
  Text,
  Avatar,
  Button,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  Divider,
  Grid,
  GridItem,

  Heading,
} from '@chakra-ui/react';

function UserPage({ user, username, avatarUrl }) {
  return (
    <>
        <Box bg="gray.100" py={4}>
          <Container maxW="container.lg">
            <Flex align="center">
              <Avatar src={avatarUrl} name={username} size="lg" />
              <Spacer />
              <Menu>
                <MenuButton as={Button}color="gray.600">
                  {username} A
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Text fontSize="xl" mt={4}>
              Welcome back, {username}!
            </Text>
            <Text mt={2}>You are now logged in.</Text>
          </Container>
        </Box>

        {/* <Box bg="gray.100" py={4}>
          <Container maxW="container.lg">
            <Grid templateColumns="1fr 3fr" gap={6}>
              <GridItem>
                <Avatar src={user.avatarUrl} name={user.name} size="2xl" />
              </GridItem>
              <GridItem>
                <VStack align="stretch" spacing={4}>
                  <Heading size="lg">{user.name}</Heading>
                  <Text fontSize="lg" fontWeight="medium">
                    {user.bio}
                  </Text>
                  <Button colorScheme="blue" size="md">
                    Edit Profile
                  </Button>
                </VStack>
              </GridItem>
            </Grid>
            <Divider my={4} />
            <Box>
              <Heading size="md">Friends</Heading>
              <Flex align="center" mt={2}>
                {user.friends.map(friend => (
                  <Avatar key={friend.id} src={friend.avatarUrl} name={friend.name} size="md" ml={-2} />
                ))}
              </Flex>
            </Box>
            <Divider my={4} />
            <Box>
              <Heading size="md">Posts</Heading>
              {user.posts.map(post => (
                <Box key={post.id} p={4} borderWidth={1} borderColor="gray.200" borderRadius="md" mt={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    {post.title}
                  </Text>
                  <Text mt={1}>{post.content}</Text>
                </Box>
              ))}
            </Box>
          </Container>
        </Box> */}
    </>
  )
}

export default UserPage;
