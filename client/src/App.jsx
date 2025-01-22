import React from "react";

const App = () => {
  return (
    <div className="
    app-container
    flex
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    background-color: lightgray;
    height: 100vh;
    ">
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
      <p>By clicking on the button, the text color will change to red.</p>
      <button onClick={() => document.body.style.color = "red"}>
        Change Text Color
      </button>
      <p>Click the button to see the color change.</p>
    </div>
  );
};

export default App;
