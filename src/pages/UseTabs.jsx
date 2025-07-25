import { useState } from "react"

const useTabs = (initialTab, allTabs) => {
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

const content = [
  {
    tab : "Section 1",
    content : "I'm the content of Section 1"
  },
  {
    tab : "Section 2",
    content : "I'm the content of Section 2"
  }
]

const Ex02 = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return(
    <div>
      {content.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
      <div>
        {currentItem.content}
      </div>
    </div>
  )
}

export default Ex02;