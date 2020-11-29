import React from "react";
import axios from "axios";

export default class AddNewPerson extends React.Component {
  state = {
    name: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const User = {
      name: this.state.name
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, User)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name: {""}
            <input
              type="text"
              name="name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          {""}
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}