import React ,{Component,useState,useCallback}from 'react'

export default function App() {
    // useState记忆函数,能记住状态
    const [count, setCount] = useState(0)

    //另一个记数器,setcount执行后函数体会全部重新执行一遍,永远为0
    var mycount=0
  return (
    //记数器
    <div>
        <button onClick={()=>{
            setCount(count+1)
            mycount++
        }}>add</button>
        {count}-{mycount}
    </div>
  )
}
