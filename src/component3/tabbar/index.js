const Tabbar = (props) => {
  // 直接以箭头函数定义函数式组件,props是父组件传来的属性

  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <li
            key={item.id}
            className={props.current === index ? "active" : ""}
            // 回调函数,调用父组件的回调函数
            onClick={() => props.myevent(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabbar;
