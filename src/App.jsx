import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Ex01 from "./pages/UseInput"
import Ex02 from "./pages/UseTabs"

function App() {

  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/useInput">useInput </Link>
      <Link to="/useTabs">useTabs </Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/useInput" element={<Ex01/>}></Route>
        <Route path="/useTabs" element={<Ex02/>}></Route>
      </Routes>
    </>
  )
}

export default App
