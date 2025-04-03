import { Box, Grid, Heading, Stat, StatLabel, StatNumber } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <Box>
      <Heading mb={6}>Learning Dashboard</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <StatLabel>Completed Quizzes</StatLabel>
          <StatNumber>7</StatNumber>
        </Stat>
        <Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <StatLabel>Average Score</StatLabel>
          <StatNumber>85%</StatNumber>
        </Stat>
        <Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <StatLabel>Study Streak</StatLabel>
          <StatNumber>5 days</StatNumber>
        </Stat>
      </Grid>
    </Box>
  )
}

export default Dashboard
