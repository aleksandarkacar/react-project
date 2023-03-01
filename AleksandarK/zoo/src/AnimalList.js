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
    return newAnimals;
  };

  const moveToTop = (key) => {
    let newAnimals = [animals[key], ...removeAnimal(key)];
    setAnimals(newAnimals);
  };

  const addAnimal = (animal) => {
    setAnimals([...animals, animal]);
  };

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default behaviour of form submit action
    // console.log({ type: type, name: type, dateOfBirth: dateOfBirth });
    addAnimal({ type: type, name: type, dateOfBirth: dateOfBirth }); // Sending data   to the server. (Will be covered sometime later)
  };

  return (
    <div className="App">
      <h1>Animals:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input
            placeholder="Type"
            type="text"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Age:
          <input
            placeholder="Age"
            type="text"
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
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
              <td>
                <button onClick={() => moveToTop(key)}>Move To Top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AnimalList;
