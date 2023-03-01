import React, { useState } from "react";

function AnimalList() {
  const [animals, setAnimals] = useState([
    {
      type: "Dog",
      name: "Boban",
      dateOfBirth: new Date().toISOString(),
      sector: "mammals",
    },
    {
      type: "Cat",
      name: "Milenko",
      dateOfBirth: new Date().toISOString(),
      sector: "mammals",
    },
    {
      type: "Girrafe",
      name: "TallBoy",
      dateOfBirth: new Date().toISOString(),
      sector: "mammals",
    },
    { type: "Elephant", name: "Biggie Smalls" },
    {
      type: "Toucan",
      name: "Sam",
      dateOfBirth: new Date().toISOString(),
      sector: "birds",
    },
  ]);

  const sectors = ["mammals", "birds"];

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
  const [currentSector, setCurrentSector] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addAnimal({
      type: type,
      name: type,
      dateOfBirth: dateOfBirth,
      sector: currentSector,
    });
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
        <label>
          Sector:
          <select
            onChange={(e) => {
              setCurrentSector(e.target.value);
            }}
          >
            <option value="">--Please choose an option--</option>
            {sectors.map((sector) => {
              return <option value={sector}>{sector}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <table className="App">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Sector</th>
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
              {animal.sector ? (
                <td>{animal.sector}</td>
              ) : (
                <td>Sector unknown</td>
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
