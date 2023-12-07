import { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  useColorModeValue,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps
} from '@chakra-ui/react'

import {
  FiClipboard,
  FiSettings,
  FiLogOut,
  FiMenu
 } from 'react-icons/fi'

import { IconType } from 'react-icons' 

import Link from 'next/link'

interface LinkItemProps{
  name: string;
  icon: IconType;
  route: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Games', icon: FiClipboard, route: '/home' },
  { name: 'Your Accout', icon: FiSettings, route: '/profile' },
  { name: 'Log Out', icon: FiLogOut, route: '/' },
]

export function Sidebar({ children }: { children: ReactNode }){

  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <Box minH="100vh" bg="zelda.900">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
        onClose={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={() => onClose()} />
        </DrawerContent>
      </Drawer>


      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={4}>
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps{
  onClose: () => void;
}

const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
  return (
    <Box
      bg="zelda.400"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >

      <Flex h="20" alignItems="center" justifyContent="space-between" mx="8">
        <Link href="/home">
          <Flex cursor="pointer" userSelect="none" flexDirection="row">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="button.default">Zelda</Text>
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="green.900">API</Text>
          </Flex>
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none'}} onClick={onClose} color='green.900'/>
      </Flex>

      {LinkItems.map(link => (
        <NavItem icon={link.icon} route={link.route} key={link.name}>
           {link.name} 
        </NavItem>
      ))}

    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  route: string;
}

const NavItem = ({icon, children, route, ...rest}: NavItemProps) => {
  return(
    <Link href={route} style={{ textDecoration: 'none'}} >
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      color='#fff'
      _hover={{
        bg: 'zelda.900',
        color: 'green.900'
      }}
      {...rest}
    >
     
     {icon && (
      <Icon
        mr={4}
        fontSize="16"
        color='#fff'
        as={icon}
        _groupHover={{
          color: 'green.900'
        }}
      />
     )}
     {children}
    </Flex>
  </Link>
  )
}

interface MobileProps extends FlexProps{
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps ) => {
  return(
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('zelda.400', 'green.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        color='green.900'
        icon={ <FiMenu/> }
      />
  
      <Flex flexDirection="row">
        <Text ml={8} fontSize="2xl" fontFamily="monospace" fontWeight="bold" color='#fff'>
          Zelda
        </Text>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="green.900">
          API
        </Text>
      </Flex>
    </Flex>
  )
}