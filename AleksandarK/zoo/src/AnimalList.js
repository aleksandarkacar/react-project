import React, { useState } from "react";

function AnimalList() {
  let [animals, setAnimals] = useState([
    { type: "Dog", name: "Boban", dateOfBirth: new Date().toISOString() },
    { type: "Cat", name: "Milenko", dateOfBirth: new Date().toISOString() },
    {
      type: "Girrafe",
      name: "TallBoy",
      dateOfBirth: new Date().toISOString(),
    },
    { type: "Elephant", name: "Biggie Smalls" },
    { type: "Toucan", name: "Sam", dateOfBirth: new Date().toISOString() },
  ]);
  const removeAnimal = (key) => {
    let newAnimals = animals.filter((animal, index) => index != key);
    setAnimals(newAnimals);
    return;
  };

  return (
    <div className="App">
      <h1>Animals:</h1>
      <table className="App">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, key) => (
            <tr key={key}>
              <td>{animal.type}</td>
              <td>{animal.name}</td>
              {animal.dateOfBirth ? (
                <td>{animal.dateOfBirth}</td>
              ) : (
                <td>Unknown</td>
              )}
              <td>
                <button onClick={() => removeAnimal(key)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AnimalList;
