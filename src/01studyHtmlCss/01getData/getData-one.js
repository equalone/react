import axios from "axios";
import React, { useState, useEffect } from "react";

export default function GetData() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        console.log(res.data.quotes[1].quote);

        setdata(res.data.quotes);
      });
  }, []);

  return (
    <div>
      GetData
      {/* {data[1].quote} */}
    </div>
  );
}
// quote:res.data.quote,
// author:res.data.author
// data: res.data.quotes,
