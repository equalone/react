// const handleClickAdd = useCallback(() => {}, []);

import React, { Component, useState, useCallback } from "react";

export default function App(props) {
  const [name, setName] = useState("");
  const [list, setList] = useState([123, 345, 234]);
  //useCallback是一个优化项,有个依赖参数列表,相关的就更新,不相关就用老数据
  // handleChange((evt)=>{
  //       setName(evt.target.value);
  //     });
  const handleChange = useCallback((evt) => {
    setName(evt.target.value);
  }, []);

  //   const handleClick = () => {
  // setList([...list, name]);
  // setName("");
  //   };
  const handleClickAdd = useCallback(() => {
    setList([...list, name]);
    setName("");
  }, [list, name]);

  //   const handleClickDel = (item) => {
  //     console.log({ item });
  //     setList(list.filter((i) => i !== item));
  //   };
  const handleClickDel = useCallback((item) => {
    console.log({ item });
    setList(list.filter((i) => i !== item));
  }, [list]);

  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <button onClick={handleClickAdd}>add</button>
      {/* // 自己换了种写法，要是不能运行就找第58章 */}
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button
              // 在回调函数中()item是函数体对象
              onClick={() => {
                handleClickDel(item);
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
