import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Pig></Pig>
      </div>
    );
  }
}
function Pig() {
  const imgStyle = {
    width: "100%",
    maxWidth: "350px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  };
  return (
    <div style={{ margin: 0, fontFamily: "sansSerif", background: "#f5f6f7" }}>
      <header
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          padding: "32px",
          background: "#0a0a23",
          color: "#fff",
          borderBottom: "4px solid #fdb37",
        }}
      >
        <h1>Css flexbox photo gallery</h1>
      </header>
      <div
        style={{
          display: "flex",
          flexDircetion: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 10px",
        }}
      >
        <img style={imgStyle} src="/jpg/xxxnh1.jpg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/20220717_180408.jpg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/20220719_000303.jpg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/20220905_112726.jpg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/hdrj06.jpeg" alt="aaa"></img>
        <img
          style={imgStyle}
          src="/jpg/IMG_20220825_055147_286.jpg"
          alt="aaa"
        ></img>
        <img style={imgStyle} src="/jpg/lpvbjp.jpeg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/u3rk6h.jpg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/xv27uw.jpg" alt="aaa"></img>
        <img style={imgStyle} src="/jpg/twp8k0.jpg" alt="aaa"></img>
      </div>
    </div>
  );
}
