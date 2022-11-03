import React from "react";
// fieldset 圈框
export default function App() {
  return (
    <div>
      <div>
        <p>1</p>
        <fieldset>
          <legend>abc</legend>
          <ul>
            <li>
              <label>
                <input name='p1'type={"radio"}></input>yes
              </label>
            </li>
            <li>
              <label>
                <input name='p1'type={"radio"}></input>no
              </label>
            </li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
}
