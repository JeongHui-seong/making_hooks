import { useRef } from "react"

const useFullScreen = (callback) => {
  const element = useRef()
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if(callback && typeof callback === "function") {
        callback(true);
      }
    }
  }
  const exitFull = () => {
    document.exitFullscreen();
      if(callback && typeof callback === "function") {
        callback(false);
      }
  }
  return { element, triggerFullScreen, exitFull };
}

const Ex12 = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small")
  }
  const { element, triggerFullScreen, exitFull } = useFullScreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="" />
        <button onClick={exitFull}>Make exitFull</button>
      </div>
      <button onClick={triggerFullScreen}>Make Fullscreen</button>
    </div>
  )
}

export default Ex12;