"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const Layout = ({ children }) => {
    return (<react_1.Flex minH="100vh">
      <react_1.Box w="250px" bg="gray.100" p={4}>
        <react_1.VStack spacing={4} align="stretch">
          <react_1.Link as={react_router_dom_1.Link} to="/">Dashboard</react_1.Link>
          <react_1.Link as={react_router_dom_1.Link} to="/quiz">Quizzes</react_1.Link>
          <react_1.Link as={react_router_dom_1.Link} to="/study-plan">Study Plan</react_1.Link>
        </react_1.VStack>
      </react_1.Box>
      <react_1.Box flex={1} p={8}>
        {children}
      </react_1.Box>
    </react_1.Flex>);
};
exports.default = Layout;
