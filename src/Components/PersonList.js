import React from "react";
import API from "../api";
export default class PersonList extends React.Component {
  state = {
    persons: []
  };
  componentDidMount() {
    API
      .get('/users').then((data) => {
      const persons = data.data;
      this.setState({ persons });
      console.log(this.state.persons);
    });
  }
  render() {
    const { persons } = this.state;
    console.log('Stato',persons)
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
