export const animals = [
  { type: "Dog", name: "Boban", dateOfBirth: new Date().toISOString() },
  { type: "Cat", name: "Milenko", dateOfBirth: new Date().toISOString() },
  { type: "Girrafe", name: "TallBoy", dateOfBirth: new Date().toISOString() },
  { type: "Elephant", name: "Biggie Smalls" },
  { type: "Toucan", name: "Sam", dateOfBirth: new Date().toISOString() },
];
export function showAnimals(animals) {
  return (
    <div>
      <h1>Animals:</h1>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, key) => (
            <tr>
              <td>{animal.type}</td>
              <td>{animal.name}</td>
              {animal.dateOfBirth ? (
                <td>{animal.dateOfBirth}</td>
              ) : (
                <td>Unknown</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
