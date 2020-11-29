import React from "react";
import axios from "axios";

export default class DeletePerson extends React.Component {
  state = {
    id: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
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
            Person ID: {""}
            <input
              type="number"
              name="id"
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </label>
          {""}
          <button type="submit">DELETE</button>
        </form>
      </div>
    );
  }
}
