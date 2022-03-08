import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import Table from "./components/Table";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
