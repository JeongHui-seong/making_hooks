import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1;
    }
  }, []);
  return {ref : element, style : {opacity : 0}};
}

const Ex09 = () => {
  const fadeInH1 = useFadeIn(0.3);
  const fadeInP = useFadeIn(0.3, 0.5);
  return (
    <div>
      <h1 {...fadeInH1} >Hello</h1>
      <p {...fadeInP} >Lorem ipsum kkakakaka</p>
    </div>
  )
}

export default Ex09;