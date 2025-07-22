import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const value = event.target.value;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  }
  return { value, onChange };
}

const Ex01 = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <input type="text" placeholder="Name" {...name}/>
      {/* value={name.value} onChange={name} 이걸 {...name} 으로 unpack 가능 */}
    </div>
  )
}

// 클래스를 활용했던 옛날 방식
class AppUgly extends React.Component {
  state = {
    item: 1
  }
  render() {
    const { item } = this.state;
    return (
      <div>
        {item}
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
    incrementItem = () => {
      this.setState(state => {
        return {
          item : state.item + 1
        }
      })
    }
    decrementItem = () => {
      this.setState(state => {
        return {
          item : state.item - 1
        }
      })
    }
  }
}

export default Ex01;