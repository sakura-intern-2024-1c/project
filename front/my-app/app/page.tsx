"use client"
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
import {User, usersSample} from '@/api/ApiSample'
import { useState, useEffect } from 'react'
import {Fetchs} from '@/api/ApiSample'
import {Api} from '@/api/Api'
import { useRouter } from 'next/navigation'


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



export default Home
