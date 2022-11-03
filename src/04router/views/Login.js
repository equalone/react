import React from "react";

export default function Login() {
  return (
    <div>
      Login
      <input></input>
      <button
        onClick={() => {
          localStorage.setItem("token", "123");
          this.props.location.push(`/center`)
        }}
      >
        登录
      </button>
    </div>
  );
}
