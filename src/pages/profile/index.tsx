import Head from "next/head";
import {Flex, Text} from '@chakra-ui/react'

import { canSSRAuth } from "@/utils/canSSRAuth";

import {Sidebar} from '../../components/sidebar'

import { GiTriforce } from "react-icons/gi";


export default function Home(){
    return(
        <>
            <Head>
                <title>Home - Zelda API</title>
            </Head>
            <Sidebar>
                <Flex>
                <Text color='#fff'>Bem vindo ao Seu Perfil</Text>
                </Flex>
            </Sidebar>
        </>
    )
}
/* autenticar para entrar na home("descomentar" quando os back estiver pronto) 

obs: user tem conta!!!

export const getServerSideProps = canSSRAuth(async(ctx) => {

    return{
        props:{

        }
    }
})

*/