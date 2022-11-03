import React, { useState } from "react";
import store from "../redux/store";
export default function Cinemas(props) {
  const [cityName, setCityName] = useState(store.getState().CityReducer.cityName);
  return (
    <div>
      <div
        onClick={() => {
          props.history.push(`/city`);
        }}
      >
        {cityName}
      </div>
      cinemas
    </div>
  );
}
