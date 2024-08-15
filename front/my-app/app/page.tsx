import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  background,
} from '@chakra-ui/react'
import {Spacer,Center} from '@chakra-ui/react'
type User = {
	id: number;
	name: string;
	status: string;
	experience: string;
};
const usersSample: User[] = [
	{ id: 1, name: "田中 太郎", status: "休憩中", experience: "営業1年目" },
	{ id: 2, name: "鈴木 一郎", status: "仕事中", experience: "エンジニア2年目" },
	{ id: 3, name: "高橋 由美", status: "休憩中", experience: "総務5年目" },
	{ id: 4, name: "山田 健一", status: "仕事中", experience: "営業4年目" },
	{ id: 5, name: "伊藤 明美", status: "休憩中", experience: "営業1年目" },
	{ id: 6, name: "中村 翔太", status: "仕事中", experience: "営業4年目" },
	{ id: 7, name: "渡辺 直子", status: "休憩中", experience: "エンジニア8年目" },
	{ id: 8, name: "小林 真一", status: "休憩中", experience: "エンジニア3年目" },
	{ id: 9, name: "加藤 美咲", status: "外出中", experience: "エンジニア1年目" },
	{ id: 10, name: "吉田 和彦", status:"休憩中", experience: "エンジニア2年目" },
]

const Home= ()=> {
	return (
		<Center>
		<Table w="80%" >
		<Thead>
			<Tr>
				<Th>名前</Th>
				<Th>ステータス</Th>
				<Th>経験</Th>
			</Tr>
		</Thead>
		<UserList users={ usersSample } />
		</Table>
		</Center>
	);
}

type Props = {
  users: User[]
}

const UserList = ({ users }: Props) => {
  return (
	  <Tbody>
		  {users.map((user) => (
			  <>
				  <Tr _hover={{ background:"lightgray" }} >
					  <Th>
						  { user.name }
					  </Th>
					  <Th>
						  { user.status }
					  </Th>
					  <Th>
						  { user.experience }
					  </Th>
				  </Tr>
			  </>
		  ))}
	  </Tbody>
  )
}



export default Home
