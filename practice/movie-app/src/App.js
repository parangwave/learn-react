import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    // router render
    return (
      <Router>
        {/* react-router-dom v.5 */}
        {/* <Switch> */}
        <Routes>
          <Route path="/" element={<Home/>}>
            {/* react-router-dom v.5 */}
            {/* < Home /> */}
          </Route>
          <Route path="/movie/:id" element={<Detail/>}></Route>
          {/* </Switch> */}
        </Routes>
      </Router>
    )
}

export default App;
