// var mycount = useRef(0);

// mycount.current++;

import React, { useState, useRef } from "react";

export default function App() {
  // useState记忆函数,能记住状态
  // useRef也是记忆函数
  const [count, setCount] = useState(0);

  //另一个记数器,setcount执行后函数体会全部重新执行一遍,永远为0
  //使用useRef拿到的是一个对象，用current访问
  var mycount = useRef(0);
  return (
    //记数器
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          // 这里有变化,对象里面的属性做加法
          mycount.current++;
        }}
      >
        add
      </button>
      {count}-{mycount.current}
    </div>
  );
}
