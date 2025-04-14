"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const Dashboard_1 = require("./pages/Dashboard");
const Quiz_1 = require("./pages/Quiz");
const StudyPlan_1 = require("./pages/StudyPlan");
const Layout_1 = require("./components/Layout");
function App() {
    return (<react_1.ChakraProvider>
      <react_router_dom_1.BrowserRouter>
        <Layout_1.default>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<Dashboard_1.default />}/>
            <react_router_dom_1.Route path="/quiz" element={<Quiz_1.default />}/>
            <react_router_dom_1.Route path="/study-plan" element={<StudyPlan_1.default />}/>
          </react_router_dom_1.Routes>
        </Layout_1.default>
      </react_router_dom_1.BrowserRouter>
    </react_1.ChakraProvider>);
}
exports.default = App;
