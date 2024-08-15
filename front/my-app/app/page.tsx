import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
} from '@chakra-ui/react'
import {Spacer,Center} from '@chakra-ui/react'
type User = {
	id: number;
	name: string;
	status: number;
	experience: string;
};
const users: User[] = [
	{ id: 1, name: "tanaka", status: 1, experience: "new" },
	{ id: 1, name: "yamada", status: 2, experience: "new" },
	{ id: 1, name: "sato", status: 3, experience: "new" },
]
const Home= ()=> {
	return (
		<Table w="80%" >
		<Thead>
			<Tr>
				<Th>名前</Th>
				<Th>ステータス</Th>
				<Th>経験</Th>
			</Tr>
		</Thead>
		<Tbody>
			<Tr>
				<Th>田中</Th>
				<Th>休憩中</Th>
				<Th>1年目</Th>
			</Tr>
			<Tr>
				<Th>山田</Th>
				<Th>外出中</Th>
				<Th>5年目</Th>
			</Tr>
			<Tr>
				<Th>山田</Th>
				<Th>外出中</Th>
				<Th>5年目</Th>
			</Tr>
		</Tbody>
		</Table>
		</Center>
	);
}
export default Home
