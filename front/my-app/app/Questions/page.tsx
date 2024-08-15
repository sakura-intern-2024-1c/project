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

type Question = {
	id: number;
	q: string;
}

const questionsSample:Question[]=[
	{id:1, q:"幸せとは何か、それをどのように定義できますか？"},
	{id:2, q:"地球温暖化を防ぐために、個人ができる具体的なアクションは何ですか？"},
	{id:3, q:"第二次世界大戦が現代社会に与えた最も大きな影響は何だと思いますか？"},
	{id:4, q:"AIの発展が未来の仕事にどのような影響を与えると思いますか？"},
	{id:5, q:"世界の異なる文化の中で、最も興味深いと感じる習慣は何ですか？"},
	{id:6, q:"ベーシックインカムは、社会にどのような影響を与える可能性がありますか？"},
]

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
