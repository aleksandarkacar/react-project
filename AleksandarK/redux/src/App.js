import logo from "./logo.svg";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import { Provider } from "react-redux";
import store from "./store";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppLayout />
        <hr />
        <UserLayout />
      </Provider>
    </div>
  );
}

export default App;
