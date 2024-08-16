"use client"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Box,
} from '@chakra-ui/react'
import {Spacer,Center, Input, VStack} from '@chakra-ui/react'
import {User, usersSample} from '@/api/ApiSample'
import { useState, useEffect } from 'react'
import {Fetchs} from '@/api/ApiSample'
import {Api} from '@/api/Api'
import { useRouter } from 'next/navigation'


const Home= ()=> {
	const [word, setWord] = useState("");
	const handleChange = (event: any) => setWord(event.target.value)
	
	return (
		<Center>
		<VStack w="100%">
			<Box h={10}></Box>
			<Input placeholder='検索ボックス' size='lg' w='80%' onChange={handleChange}/>
			<Table w="80%" >
			<Thead>
				<Tr>
					<Th>名前</Th>
					<Th>ステータス</Th>
					<Th>経験</Th>
				</Tr>
			</Thead>
			<UserList users={ searchUser(word) } />
			</Table>
		</VStack>
		</Center>
	);
}

type Props = {
  users: User[]
}

const UserList = ({ users }: Props) => {
	const router = useRouter()
	  return (
	  <Tbody>
		  {users.map((user) => (
			  <>
					<Tr _hover={{ background:"lightgray" }} onClick={()=>{router.push("/QuestionPost/"+String(user.id))}}>
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


const searchUser=(word:string)=>{
	console.log("aaaaa")
		var users=[]
		for (let u of usersSample){
			if(u.name.includes(word) || u.experience.includes(word) || u.status.includes(word)){
				users.push(u)
			}
		}
		console.log(users)
		return users
}


export default Home
