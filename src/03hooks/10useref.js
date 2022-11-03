// const name = useRef();

// <input ref={name} />;

// name.current.value = "";
import React, { useState, useCallback, useRef } from "react";

export default function App(props) {
  //const [name, setName] = useState("");
  const [list, setList] = useState([123, 345, 234]);
  //等价于React.createRef()
  const name = useRef();

  const handleClickAdd = useCallback(() => {
    console.log(name.current.value);

    setList([...list, name.current.value]);

    name.current.value = "";
  }, [list, name]);

  const handleClickDel = useCallback(
    (item) => {
      console.log({ item });
      setList(list.filter((i) => i !== item));
    },
    [list]
  );

  return (
    <div>
      <input ref={name} />
      <button onClick={handleClickAdd}>add</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button
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
