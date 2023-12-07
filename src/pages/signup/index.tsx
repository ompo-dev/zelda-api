import { useState, useContext } from 'react';
import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import {Button, Flex, Text, Center, Input, Select, PinInput, PinInputField} from '@chakra-ui/react'
import logoImg from '../../../public/images/logo-zelda.svg'

import Link from 'next/link';

import {AuthContext} from '../../context/AuthContext'

import { canSSRGuest } from '@/utils/canSSRGuest';

import { GiTriforce } from "react-icons/gi";


export default function SignUp(){

    const {signUp} = useContext(AuthContext);

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [yo,setYo] = useState('')

    async function handleSignUp() {
        if(name=== '' && password ==='' && yo.length<4){
            alert("Enter name, password and your year of birth.")
            return;
        }
        if(name=== '' && password ===''){
            alert("Enter your user name and passowrd.")
            return;
        }
        if(name=== '' && yo.length<4){
            alert("Enter your user name and your year of birth.")
            return;
        }
        if(name=== ''){
            alert("Enter your user name.")
            return;
        }
        if(password ==='' && yo.length<4){
            alert("Enter your year of birth and password.")
            return;
        }
        if(password ===''){
            alert("Enter your password.")
            return;
        }  
        if(yo.length<4){
            alert("Enter your year of birth. Ex: 2000")
            return;
        }

        await signUp({
            name,
            yo,
            password
        })
    }

    return(
        <>
            <Head>
                <title>Sign Up - Zelda API</title>
            </Head>
            <Flex background="zelda.900" height="100vh" alignItems="center" justifyContent="center">

                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Center p={4}>
                        <Image
                            src={logoImg}
                            quality={100}
                            width={240}
                            objectFit='fill'
                            alt='Zelda Api'
                        />
                    </Center>

                        <Flex>
                            <Input
                                background="zelda.400"
                                variant="filled"
                                size="lg"
                                textColor="#fff"
                                placeholder='Enter your User...'
                                type='text'
                                mb={3}
                                mr={1}
                                _hover={{bg:"#3E3F4D"}}
                                value={name}
                                onChange={(e)=> setName(e.target.value.replace(/\s/g, ''))}
                            />
                            <PinInput
                                size="lg" 
                                defaultValue='2000'
                                value={yo}
                                onChange={(value) => setYo(value)}
                            >
                                <PinInputField ml={2} textColor="#fff" bg="zelda.400" _hover={{bg:"#3E3F4D", borderColor:"#3E3F4D"}} borderColor="zelda.400"/>
                                <PinInputField ml={2} textColor="#fff" bg="zelda.400" _hover={{bg:"#3E3F4D", borderColor:"#3E3F4D"}} borderColor="zelda.400"/>
                                <PinInputField ml={2} textColor="#fff" bg="zelda.400" _hover={{bg:"#3E3F4D", borderColor:"#3E3F4D"}} borderColor="zelda.400"/>
                                <PinInputField ml={2} textColor="#fff" bg="zelda.400" _hover={{bg:"#3E3F4D", borderColor:"#3E3F4D"}} borderColor="zelda.400"/>
                            </PinInput>
                        </Flex>

                    <Input
                        background="zelda.400"
                        variant="filled"
                        size="lg"
                        textColor="#fff"
                        _hover={{bg:"#3E3F4D"}}
                        placeholder='Enter your Password...'
                        type='password'
                        mb={6}
                        value={password}
                        onChange={(e)=> setPassword(e.target.value.replace(/\s/g, ''))}
                    />

                    <Button 
                        background="button.cta"
                        mb={6}
                        color="gray.900"
                        size="lg"
                        _hover={{bg:"#24D23C"}}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>

                    <Center mt={2}>
                        <Link href="../">
                            <Text color="#fff" cursor="pointer">I already have an account.<strong> Sign In</strong></Text>
                        </Link>
                    </Center>

                </Flex>

            </Flex>
        </>
    )
}

/* autenticar para entrar na home("descomentar" quando os back estiver pronto) 

obs: user NAO tem conta!!!

export const getServerSideProps = canSSRGuest(async(ctx) => {

    return{
        props:{

        }
    }
})

*/