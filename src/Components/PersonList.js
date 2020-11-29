import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((data) => {
      const persons = data.data;
      this.setState({ persons });
      console.log(this.state.persons);
    });
  }
  render() {
    const { persons } = this.state;
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
