import React from "react";
import "./styles.css";
import GetPersons from "./Components/PersonList"; // GET Method
// import AddPerson from "./Components/AddNewPerson"; // POST Method
// import DeletePerson from './Components/DeletePerson' // DELETE METHOD

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <GetPersons />
      {/* <AddPerson /> */}
      {/* <DeletePerson/> */}
    </div>
  );
}
