import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import CategoryList from "./categoryList";

function App() {
  return (
    <div className="App">
      <CategoryList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
