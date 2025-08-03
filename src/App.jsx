import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Ex01 from "./pages/UseInput"
import Ex02 from "./pages/UseTabs"
import Ex03 from "./pages/useEffect"
import Ex04 from "./pages/useTitle"
import Ex05 from "./pages/useClick"
import Ex06 from "./pages/useConfirm"
import Ex07 from "./pages/usePreventLeave"
import Ex08 from "./pages/useBeforeLeave"
import Ex09 from "./pages/useFadeIn"
import Ex10 from "./pages/useNetwork"
import Ex11 from "./pages/useScroll"
import Ex12 from "./pages/useFullScreen"
import Ex13 from "./pages/useNotification"
import Ex14 from "./pages/useAxios"

function App() {

  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/useInput">useInput </Link>
      <Link to="/useTabs">useTabs </Link>
      <Link to="/useEffect">useEffect </Link>
      <Link to="/useTitle">useTitle </Link>
      <Link to="/useClick">useClick </Link>
      <Link to="/useConfirm">useConfirm </Link>
      <Link to="/usePreventLeave">usePreventLeave </Link>
      <Link to="/useBeforeLeave">useBeforeLeave </Link>
      <Link to="/useFadeIn">useFadeIn </Link>
      <Link to="/useNetwork">useNetwork </Link>
      <Link to="/useScroll">useScroll </Link>
      <Link to="/useFullScreen">useFullScreen </Link>
      <Link to="/useNotification">useNotification </Link>
      <Link to="/useAxios">useAxios </Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/useInput" element={<Ex01/>}></Route>
        <Route path="/useTabs" element={<Ex02/>}></Route>
        <Route path="/useEffect" element={<Ex03/>}></Route>
        <Route path="/useTitle" element={<Ex04/>}></Route>
        <Route path="/useClick" element={<Ex05/>}></Route>
        <Route path="/useConfirm" element={<Ex06/>}></Route>
        <Route path="/usePreventLeave" element={<Ex07/>}></Route>
        <Route path="/useBeforeLeave" element={<Ex08/>}></Route>
        <Route path="/useFadeIn" element={<Ex09/>}></Route>
        <Route path="/useNetwork" element={<Ex10/>}></Route>
        <Route path="/useScroll" element={<Ex11/>}></Route>
        <Route path="/useFullScreen" element={<Ex12/>}></Route>
        <Route path="/useNotification" element={<Ex13/>}></Route>
        <Route path="/useAxios" element={<Ex14/>}></Route>
      </Routes>
    </>
  )
}

export default App
