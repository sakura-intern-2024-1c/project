import {Button} from "@chakra-ui/react"
import {Spacer, Center} from '@chakra-ui/react'
import { useRouter } from 'next/router';
export const Footer = () => {
	const router = useRouter()
	const handleClick = () => {
  alert(123);
}
	return (
		<>
		<Center m={12}>
		<Spacer />
		<Button onClick={()=>{router.push("/Questions")}}>AI</Button>
		<Spacer />
		<Button variant='ghost' onClick={()=>{router.push("/QuestionAnswer")}}>過去のQAコーナー</Button>
		<Spacer />
		</Center>
		</>
	)
}
