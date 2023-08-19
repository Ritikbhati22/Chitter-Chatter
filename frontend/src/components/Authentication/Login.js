import React from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'
const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const pass = () => setShow(!show)
    const postDetails = (pics) => { };
    const submit = () => { };
    return (
        <VStack spacing={'5px'}>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>

            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup><Input placeholder='Enter Your Password'
                    type={show ? "text" : 'password'}
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                    <InputRightElement width={"4.5rem"}>
                        <Button h='1.75rem' size={'sm'} onClick={pass}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button mt={'2'} colorScheme='blue' width={'100%'} onClick={submit}>
               Login
            </Button>
            <Button variant={'solid'} colorScheme='red' width={'100%'} onClick={()=>{
                setEmail("guest@example.com");
                setPassword("123456")
            }}>
              Guest User
            </Button>
        </VStack>
    )
}

export default Login