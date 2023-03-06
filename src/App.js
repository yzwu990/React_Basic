import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "John", lastName: "Doe" },
      company: "Facebook"
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.lastName}, I work
            for {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(
              // could be (state,props) => {
              // state is the current state, in case we need to render the state according to the current state
              // props is the current props
              // for now we are not using props and state.
              () => {
                return {
                  name: { firstName: "Jane", lastName: "May" }
                };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}
export default App;
