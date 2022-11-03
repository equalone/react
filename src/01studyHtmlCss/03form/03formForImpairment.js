import React, { Component } from "react";
// 在react中想直接写网页,很多坑,分组件写吧,容易一些,不要一上来就吃成个大胖子,
export default class App extends Component {
  render() {
    return (
      <div>
        <Form></Form>
      </div>
    );
  }
}
function Form() {
  return (
    <div>
      <header>
        <img
          id="logo"
          src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="aaa"></img>
        <h1>HTML/CSS Quiz</h1>
        <nav>
          <ul>
            <li>
              <a href="#student-info" >
                INFO
              </a>
            </li>
            <li>
              <a href="#html-questions" >
                INFO
              </a>
            </li>
            <li>
              <a href="#css-questions" >
                INFO
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <form
          method="post"
          action="https://freecodecamp.org/practice-project/accessibility-quiz"
        >
          <section role="region" aria-labelledby="student-info">
            <h2 id="student-info">Student Info</h2>
            <div className="info">
              <label htmlFor="student-name">Name:</label>
              <input type="text" name="student-name" id="student-name"/>
            </div>
            <div className="info">
              <label htmlFor="student-email">Email:</label>
              <input
                type="email"
                name="student-email"
                id="student-email"
              ></input>
            </div>
            <div className="info">
              <label htmlFor="birth-date">
                D.O.B<span className="sr-only">(Date of birth)</span>
              </label>
              <input type="date" name="birth-date" id="birth-date"/>
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
        </form>
      </main>
      <footer>
        <address>
          <a href="https://freecodecamp.org">freecodecamp</a>
          <br />
          San Francisco
          <br />
          California
          <br />
          USA
        </address>
      </footer>
    </div>
  );
}
