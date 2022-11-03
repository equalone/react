// onClick={() => {setList(list.filter((i) => i !== item))}}

import React, { useState } from "react";
export default function App(props) {
  const [name, setName] = useState("");
  const [list, setList] = useState([123, 345, 234]);

  return (
    <div>
      <input
        type="text"
        onChange={(evt) => {
          setName(evt.target.value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          setList([...list, name]);
          setName("");
        }}
      >
        add
      </button>
      {/* // 自己换了种写法，要是不能运行就找第58章 */}
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button
            // 在回调函数中()item是wbn
              onClick={() => {console.log({item})
                setList(list.filter((i) => i !== item));
              }}
            >
              del
            </button>
          </li>
        ))}
      </ul>

      {!list.length && <div>暂无代办事项</div>}
    </div>
  );
}
{
  /* <button onClick={(item)=>{setList(list.filter(i=>i!==item)

)}}>del</button> */
}
