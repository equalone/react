import React from "react";

export default function App() {
  const header = {
    height: "50px",
    width: "100%",
    backgroundColor: "#1b1b23",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    position: "fixed",
    top: 0,
  };

  const logo = {
    width: "max(100px,18vw)",
    aspectRatio: '35 / 4',
    padding: "0.4rem",
  };
  const h1 = {
    color: "#f1be32",
    fontSize: "min(5vw, 1.2em)",
    textAlign: "center",
  };
  const nav = {
    width: "50%",
    maxWidth: "300px",
    height: "50px",
  };
  const ul = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
    paddingInlineStart: 0,
    marginBlock: 0,
    height: "100%",
  };
  const li={display:'block',color:'white',listStyle:'none'}
  return (
    <div>
      <header style={header}>
        <img id="logo" src="/jpg/yuj331.jpg" alt="" style={logo}></img>
        <h1 style={h1}>Html</h1>
        <nav style={nav}>
          <ul style={ul}>
            <li style={li}>H</li>
            <li style={li}>C</li>
            <li style={li}>I</li>
          </ul>
        </nav>
      </header>

      {/* <div className="info">
        <label htmlFor="student-name">Name:</label>
        <input type="text" name="student-name" id="student-name" />
      </div> */}
      {/* <form
        method="post"
        action="https://freecodecamp.org/practice-project/accessibility-quiz"
      >
        <section role="region" aria-labelledby="student-info">
          <h2 id="student-info">Student Info</h2>
          <div className="info">
            <label htmlFor="student-name">Name:</label>
            <input type="text" name="student-name" id="student-name" />
          </div>
          <div className="info">
            <label htmlFor="student-email">Email:</label>
            <input type="email" name="student-email" id="student-email"></input>
          </div>
          <div className="info">
            <label htmlFor="birth-date">
              D.O.B<span className="sr-only">(Date of birth)</span>
            </label>
            <input type="date" name="birth-date" id="birth-date" />
          </div>
        </section>
        <section role="region" aria-labelledby="html-questions">
          <h2 id="html-questions">HTML</h2>
          <div className="question-block"></div>
          <p>1</p>
          <fieldset className="question" name="html-question-one">
            <legend>
              The legend element represents a caption for the content of its
              parent fieldset element
            </legend>
            <ul className="answers-list">
              <li>
                <label htmlFor="q1-a1">
                  <input type="radio" id="q1-a1" name="q1" value="true">
                    True
                  </input>
                </label>
              </li>
              <li>
                <label htmlFor="q1-a2">
                  <input type="radio" id="q1-a2" name="q1" value="false">
                    False
                  </input>
                </label>
              </li>
            </ul>
          </fieldset>
        </section>
        <section role="region" aria-labelledby="css-questions">
          <h2 id="css-questions">CSS</h2>
          <div className="formrow">
            <div className="question-block">
              <label htmlFor="customer">Are you a frontend developer?</label>
              <div className="answer">
                <select name="customer" id="customer" required>
                  <option value={""}>Select an option</option>
                  <option value={"yes"}>Yes</option>
                  <option value={"no"}>No</option>
                </select>
              </div>
              <div className="answer">
                <textarea
                  id="css-questions"
                  name="css-questions"
                  rows={"5"}
                  cols={"24"}
                  placeholder="Who is flexbox..."
                ></textarea>
              </div>
            </div>
          </div>
        </section>
        <button type="submit">Submit</button>
      </form>*/}
    </div>
  );
}
