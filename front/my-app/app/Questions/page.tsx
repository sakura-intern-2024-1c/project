"use client"
import { Header } from "@/components/Header"
import { StackDivider, Stack, HStack, VStack } from '@chakra-ui/react'
import {Box} from "@chakra-ui/react"
import {Spacer,Center} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import {Question, questionsSample} from '@/api/ApiSample'

const QuestionsPage= ()=> {
	return (
		<Center>
		<Table w="80%" >
		<Thead>
			<Tr>
				<Th>質問</Th>
			</Tr>
		</Thead>
		<QuestionList questions={questionsSample}/>
		</Table>
		</Center>
	);
}
type Props = {
  questions: Question[]
}

const QuestionList = ({ questions }: Props) => {
	const router = useRouter()
	return (
		<Tbody>
			{questions.map((question) => (
				<>
					<Tr _hover={{ background:"lightgray" }} onClick={()=>{router.push("Questions/"+String(question.id))}}>
						<Th>
							  {question.q}
						</Th>
					</Tr>
				</>
			))}
		</Tbody>
	)
}
export default QuestionsPage
