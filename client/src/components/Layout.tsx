import { Box, Flex, Link as ChakraLink, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minH="100vh">
      <Box w="250px" bg="gray.100" p={4}>
        <VStack spacing={4} align="stretch">
          <ChakraLink as={RouterLink} to="/">Dashboard</ChakraLink>
          <ChakraLink as={RouterLink} to="/quiz">Quizzes</ChakraLink>
          <ChakraLink as={RouterLink} to="/study-plan">Study Plan</ChakraLink>
        </VStack>
      </Box>
      <Box flex={1} p={8}>
        {children}
      </Box>
    </Flex>
  )
}

export default Layout
