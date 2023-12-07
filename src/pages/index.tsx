import { useState, useContext } from 'react';
import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import {Button, Flex, Text, Center, Input} from '@chakra-ui/react'
import logoImg from '../../public/images/logo-zelda.svg'

import Link from 'next/link';

import {AuthContext} from '../context/AuthContext'

import { canSSRGuest } from '@/utils/canSSRGuest';

import { GiTriforce } from "react-icons/gi";


export default function SignIn(){

    const {signIn} = useContext(AuthContext)

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')


    async function handleSignIn() {
        if(name=== ''&& password ===''){
            alert("Enter your user name and password.")
            return;
        }
        if(name=== ''){
            alert("Enter your user name.")
            return;
        }
        if(password ===''){
            alert("Enter your password.")
            return;
        }

        await signIn({
            name,
            password
        })
    }

    return(
        <>
            <Head>
                <title>Sign In - Zelda API</title>
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

                    <Input
                        background="zelda.400"
                        variant="filled"
                        size="lg"
                        textColor="#fff"
                        placeholder='Enter your User...'
                        type='text'
                        mb={3}
                        _hover={{bg:"#3E3F4D"}}
                        value={name}
                        onChange={(e)=> setName(e.target.value.replace(/\s/g, ''))}
                    />

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
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>

                    <Center mt={2}>
                        <Link href="/signup">
                            <Text color="#fff" cursor="pointer">I want to register my account<strong> Click here.</strong></Text>
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