import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'

const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const pass = () => setShow(!show)
    const postDetails = (pics) => {
        setLoading(true)
        if (pics == undefined) {
            toast({
                title: "Please Select an Image",
                status: "warning",
                duration: 5000,
                isClosable: "bottom",
            })
            return;
        }
        if (pics.type == "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics)
            data.append("upload_present", "Chitter-Chatter")
            data.append("cloud_name", "dxbzlcazj")
            fetch("https://api.cloudinary.com/v1_1/dxbzlcazj/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString());
                    console.log(data.url.toString())
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false)
                })
        }
        else {
            toast({
                title: "Please Select an Image",
                status: "warning",
                duration: 5000,
                isClosable: "bottom",
            })
            setLoading(false)
            return;
        }
    };
    const submit = () => { };
    return (
        <VStack spacing={'5px'}>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}>
                </Input>

            </FormControl>
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
            <FormControl id='confirmpassword' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup><Input placeholder='Confirm Password'
                    type={show ? "text" : 'password'}
                    onChange={(e) => setConfirmpassword(e.target.value)}>
                </Input>
                    <InputRightElement width={"4.5rem"}>
                        <Button h='1.75rem' size={'sm'} onClick={pass}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic' isRequired>
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type='file'
                    p={1.5}
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])}>
                </Input>

            </FormControl>
            <Button mt={'2'} colorScheme='blue' width={'100%'} onClick={submit} isL oading={loading}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup