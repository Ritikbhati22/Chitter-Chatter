import React from 'react'
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
} from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const Home = () => {
  return <Container maxW='xl' centerContent >
    <Box d='flex' p={3} bg={"white"} w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      textAlign={"center"} >
      <Text fontSize="2xl" fontFamily={'worksans'}>Chitter-Chatter</Text>
    </Box>
    <Box bg={'white'} w='100%' p={4} borderRadius={"lg"} borderWidth={"1px"}>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList mb="1em">
          <Tab width="50%">Login</Tab>
          <Tab width={"50%"}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
          <Signup/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
}

export default Home