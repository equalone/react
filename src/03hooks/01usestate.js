import React, { useState } from "react";
export default function App(props) {
  //name是初始值，setName改变name的唯一方法,useState是设置初始值
  const [name, setName] = useState("xxx");
  const [age, setAge] = useState(100);
 
  return (
    <div>
      <button
        onClick={() => {
          setName("yyy");
          setAge(18);
        }}
      >
        click
      </button>
      {name}-{age}
    </div>
  );
}
