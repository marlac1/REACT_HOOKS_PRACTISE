import logo from "./logo.svg";
import "./App.css";
import Effect from "./Effect";
import ChatApi from "./ChatApi";
import ManageState from "./ManageState";
import ManageEffect from "./ManageEffect";
import FetchData from "./FetchData";
const App = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <p>PRACTISE DATA FETCHING WITH REACT HOOKS AND AXIOS</p>
      DOC{" "}
      <a
        className="noDecoration"
        href="https://www.robinwieruch.de/react-hooks-fetch-data/?fbclid=IwAR1G4cevs_ZseJMrqRCl3oH8eV9e7dTl4krXqr4jmhCO_MpBfJrn0rKkDoM"
      >
        HERE
      </a>
      {/* <Effect /> */}
      <ManageState />
      <ManageEffect />
      <div className="fetchdata">
        <br />
        <FetchData />
      </div>
      {/* <ChatApi /> */}
    </div>
  );
};

export default App;
