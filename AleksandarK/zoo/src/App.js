import logo from "./logo.svg";
import "./App.css";
import { animals } from "./AnimalList";
import { showAnimals } from "./AnimalList";

function App() {
  return (
    <div>
      <header>Zoo app</header>
      <p>{animals.forEach((animal) => animal.name)}</p>
      <div>{showAnimals(animals)}</div>
    </div>
  );
}

export default App;
