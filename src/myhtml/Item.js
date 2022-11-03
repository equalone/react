import React from "react";

export default function Item(props) {
  return (
    <div>
      <span style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ flex: "2", marginLeft: "10px" }}>item{props.item}</div>

        <div style={{ flex: "1", textAlign: "right", marginRight: "10px" }}>
          {props.calorie}
        </div>
      </span>
    </div>
  );
}
