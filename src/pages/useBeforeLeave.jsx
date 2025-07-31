import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if(typeof onBefore !== "function") return;
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle)
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
}

const Ex08 = () => {
  const begForLife = () => console.log("plz dont leave");
  useBeforeLeave(begForLife)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Ex08;