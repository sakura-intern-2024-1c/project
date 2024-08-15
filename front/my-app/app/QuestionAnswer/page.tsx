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

const QuestionAnswer= ()=> {
	return (
		<Center>
		<Table w="80%" >
		<Thead>
			<Tr>
				<Th>質問</Th>
			</Tr>
		</Thead>
		<Tbody>
			<Tr>
				<Th>幸せとは何か、それをどのように定義できますか？</Th>
			</Tr>
			<Tr>
				<Th>地球温暖化を防ぐために、個人ができる具体的なアクションは何ですか？</Th>
			</Tr>
			<Tr>
				<Th>第二次世界大戦が現代社会に与えた最も大きな影響は何だと思いますか？</Th>
			</Tr>
			<Tr>
				<Th>AIの発展が未来の仕事にどのような影響を与えると思いますか？</Th>
			</Tr>
			<Tr>
				<Th>世界の異なる文化の中で、最も興味深いと感じる習慣は何ですか？</Th>
			</Tr>
			<Tr>
				<Th>ベーシックインカムは、社会にどのような影響を与える可能性がありますか？</Th>
			</Tr>
		</Tbody>
		</Table>
		</Center>
	);
}
export default QuestionAnswer
