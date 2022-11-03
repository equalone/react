// a.substring(0, 1).toUpperCase() + a.substring(1)

import React, { useState, useEffect } from "react";

export default function App() {
  const [a, setA] = useState("know");
  useEffect(() => {
    setA(a.substring(0, 1).toUpperCase() + a.substring(1));
  }, [a]);
//   副作用函数后的依赖列表,中的元素被执行一次函数体也会执行
// 被称之为依赖更新
// 不要对你的dependencies撒谎,会报错,不会随着依赖项改变而更新
  return (
    <div>
      App-{a}
      <button
        onClick={() => {
          setA("xiaoming");
        }}
      >
        click
      </button>
    </div>
  );
}
