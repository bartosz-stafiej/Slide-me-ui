import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slide-me</h1>
          <Link to="/enter">Enter to the new world!</Link>
      </div>
    );
  }
}

export default App;
