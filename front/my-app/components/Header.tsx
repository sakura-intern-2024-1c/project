"use client"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import React from 'react'
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react'

import { useRouter } from 'next/navigation'

export const Header = () => {
	const isMobile = useBreakpointValue({ base: true, md: false })
	const router = useRouter()
	if (isMobile) {
		return (
			<Flex minWidth='max-content' alignItems='center' gap='2' m='2' >
				<Button onClick={()=>{router.push("/")}} bgColor="white" _hover={{bgColor:"white",color:"gray"}}>
				<Heading size='lg'> 社内人材検索・質問アプリ </Heading>
				</Button>
				<Spacer />
				<DrawerExample />
			</Flex>
		)
	}
	return (
		<Flex minWidth='max-content' alignItems='center' gap='2' mt='2' mb='2' >
			<Spacer />
				<Button onClick={()=>{router.push("/")}} bgColor="white" _hover={{bgColor:"white",color:"gray"}}>
				<Heading size='lg'> 社内人材検索・質問アプリ </Heading>
				</Button>
			<Spacer />
			<ButtonGroup gap='2'>
				<Button bgColor='white' size='lg'>Sign Up</Button>
				<Button bgColor='white' size='lg' onClick={ ()=>{router.push("/login")} }>Log in</Button>
			</ButtonGroup>
			<Spacer />
		</Flex>
	)
}


function DrawerExample() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef(null)

	return (
		<>
			<HamburgerIcon ref={btnRef} onClick={onOpen} boxSize={8}>
			</HamburgerIcon>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='full'
			>
				<DrawerOverlay />
				<DrawerContent bgColor='black' >
					<DrawerCloseButton color='white' boxSize={8} />
					<DrawerHeader color='white' >
						<Heading size='lg'>
						社内人材検索・質問アプリ	
						</Heading>
					</DrawerHeader>
					<DrawerBody>
						<Input placeholder='Type here...' color='white' />
					</DrawerBody>
					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose} color='white'>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}
