import { Header } from "@/components/Header"
import { StackDivider, Stack, HStack, VStack } from '@chakra-ui/react'
import {Box} from "@chakra-ui/react"
const QuestionAnswer= ()=> {
	return (
		<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px' bg='yellow.200'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink.100'>
    3
  </Box>
</VStack>
	);
}
export default QuestionAnswer
