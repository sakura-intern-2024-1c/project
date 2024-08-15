import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Flex, Text, Avatar } from '@chakra-ui/react'
import { VStack,Center,Spacer, Divider } from '@chakra-ui/react'


const QuestionPage= ()=> {
	return(
		<VStack >
			<Box h={10}></Box>
			<Center>
			<Card w='lg'>
				<CardHeader>
					<Heading size='md'> 質問</Heading>
					<Divider mt={2} mb={3}/>
					<Flex>
						<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
							<Avatar name='田中太郎' src='https://bit.ly/broken-link'/>
							<Box>
								<Heading size='sm'>田中 太郎</Heading>
								<Text>営業1年目</Text>
							</Box>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody>
				<Text>
					幸せとは何か、それをどのように定義できますか？
				</Text>
			</CardBody>
			</Card>
			</Center>
			<Box h={10}></Box>
			<Center>
			<Card w='lg'>
				<CardHeader>
				<Heading size='md'> 回答</Heading>
					<Divider mt={2} mb={3}/>
					<Flex>
						<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
							<Avatar name='中村 翔太' src='https://bit.ly/broken-link'/>
							<Box>
								<Heading size='sm'>中村 翔太</Heading>
								<Text>営業4年目</Text>
							</Box>
					</Flex>
				</Flex>
				</CardHeader>
				<CardBody>
					<Text>
幸せとは、非常に個人的で主観的な概念であり、一般的に「満足感」や「充足感」を感じる状態を指します。人によって異なる価値観や経験によって感じられるものであるため、普遍的な定義は難しいですが、以下のような要素が幸せの定義に関わることが多いです。
					</Text>
				</CardBody>
			</Card>
			</Center>
		</VStack>
	)
}
export default QuestionPage
