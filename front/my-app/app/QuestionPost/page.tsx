import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Flex, Text, Avatar } from '@chakra-ui/react'
import { VStack,Center,Spacer, Divider } from '@chakra-ui/react'
import { Textarea, Button } from '@chakra-ui/react'
const QuestionPostPage= ()=> {
	return (
		<Center>
		<VStack w={["80%","lg"]}>
			<Box h={10}></Box>
			<Center>
			<Card w={["80%","lg"]}>
				<CardHeader>
					<Heading size='md'> 宛先</Heading>
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
			</Card>
			</Center>
			<Box h={10}></Box>
			<Center>
			<Card w={["80%","lg"]}>
				<CardHeader>
				<Heading size='md'> 質問</Heading>
					<Divider mt={2} mb={3}/>
					<Flex>
						<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
							<Avatar name='田中 太郎' src='https://bit.ly/broken-link'/>
							<Box>
								<Heading size='sm'>田中 太郎</Heading>
								<Text>営業1年目</Text>
							</Box>
					</Flex>
				</Flex>
				</CardHeader>
				<CardBody>
				<Textarea />
				</CardBody>
				<CardFooter>
				<Spacer />
				<Button>
				送信
				</Button>
				</CardFooter>
			</Card>
			</Center>
		</VStack>
		</Center>
	);
}
export default QuestionPostPage
