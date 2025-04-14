"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const Dashboard = () => {
    return (<react_1.Box>
      <react_1.Heading mb={6}>Learning Dashboard</react_1.Heading>
      <react_1.Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <react_1.Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <react_1.StatLabel>Completed Quizzes</react_1.StatLabel>
          <react_1.StatNumber>7</react_1.StatNumber>
        </react_1.Stat>
        <react_1.Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <react_1.StatLabel>Average Score</react_1.StatLabel>
          <react_1.StatNumber>85%</react_1.StatNumber>
        </react_1.Stat>
        <react_1.Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <react_1.StatLabel>Study Streak</react_1.StatLabel>
          <react_1.StatNumber>5 days</react_1.StatNumber>
        </react_1.Stat>
      </react_1.Grid>
    </react_1.Box>);
};
exports.default = Dashboard;
