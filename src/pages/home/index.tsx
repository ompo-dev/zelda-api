import { useState, useContext} from 'react';
import Head from "next/head";
import Image from 'next/image';
import {Button, 
    Flex, 
    Text, 
    Center,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading, 
    SimpleGrid, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure } from '@chakra-ui/react'
import logoImg from '../../../public/images/logo-zelda.svg'

import { canSSRAuth } from "@/utils/canSSRAuth";

import {Sidebar} from '../../components/sidebar'

import { GiTriforce } from "react-icons/gi";


export default function Home(){

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Head>
                <title>Home - Zelda API</title>
            </Head>
            <Sidebar>
                <Flex>
                    <Center>
                        <Flex direction="row" flexWrap='wrap' p={8} rounded={8}  justify-content='space-evenly'>
                            <Center>
                                <SimpleGrid columns={[null, null, 3]} spacing={4} justify-content='space-evenly'>
                                    <Card>
                                        <CardHeader>
                                            <Heading size='lg'>The Legend of Zelda</Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <Text>The Legend of Zelda is the first installment of the Zelda series...</Text>
                                        </CardBody>
                                        <CardFooter>

                                            <Button onClick={onOpen}>Read more</Button>

                                            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay />
                                                <ModalContent>
                                                <ModalHeader>The Legend of Zelda</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Text fontWeight='bold' mb='1rem'>
                                                    Description:
                                                    </Text>
                                                    <Text mb='1rem'>
                                                    The Legend of Zelda is the first installment of the Zelda series. It centers its plot around a boy named Link, who becomes the central protagonist throughout the series. It came out as early as 1986 for the Famicom in Japan, and was later released in the western world, including Europe and the US in 1987. It has since then been re-released several times, for the Nintendo GameCube as well as the Game Boy Advance. The Japanese version of the game on the Famicom is known as The Hyrule Fantasy: The Legend of Zelda.
                                                    </Text>
                                                        <Text fontWeight='bold' mb='1rem'>
                                                        Developer:
                                                        </Text>
                                                        <Text mb='1rem'>
                                                        Nintendo R&D 4
                                                        </Text>
                                                            <Text fontWeight='bold' mb='1rem'>
                                                            Publisher:
                                                            </Text>
                                                            <Text mb='1rem'>
                                                            Nintendo
                                                            </Text>
                                                                <Text fontWeight='bold' mb='1rem'>
                                                                Released Date:
                                                                </Text>
                                                                <Text mb='1rem'>
                                                                February 21, 1986
                                                                </Text>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                    Close
                                                    </Button>
                                                    <Button variant='ghost'>Add your Review</Button>
                                                </ModalFooter>
                                                </ModalContent>
                                            </Modal>
                                        </CardFooter>
                                    </Card>


                                    <Card>
                                        <CardHeader>
                                        <Heading size='lg'> Customer dashboard</Heading>
                                        </CardHeader>
                                        <CardBody>
                                        <Text>View a summary of all your customers over the last month.</Text>
                                        </CardBody>
                                        <CardFooter>
                                        <Button>View here</Button>
                                        </CardFooter>
                                    </Card>


                                    <Card>
                                        <CardHeader>
                                        <Heading size='lg'> Customer dashboard</Heading>
                                        </CardHeader>
                                        <CardBody>
                                        <Text>View a summary of all your customers over the last month.</Text>
                                        </CardBody>
                                        <CardFooter>
                                        <Button>View here</Button>
                                        </CardFooter>
                                    </Card>
                                </SimpleGrid>
                            </Center>
                        </Flex>
                    </Center>
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