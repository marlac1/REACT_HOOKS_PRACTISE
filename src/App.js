import logo from "./logo.svg";

import "./App.css";

import ManageState from "./ManageState";
import ManageEffect from "./ManageEffect";

import ManageDatas from "./ManageDatas";
//import TrySpreadOperator from "./TrySpreadOperator";
//import TodoReducer from "./TodoReducer";
import CustomReducerHook from "./CustomReducerHook";
import CheckboxAndReducer from "./checkboxes/CheckboxAndReducer";
const App = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
      <p>
        PRACTISE DATA FETCHING WITH REACT HOOKS AND AXIOS, DOC{" "}
        <a
          className="noDecoration"
          href="https://www.robinwieruch.de/react-hooks-fetch-data/?fbclid=IwAR1G4cevs_ZseJMrqRCl3oH8eV9e7dTl4krXqr4jmhCO_MpBfJrn0rKkDoM"
        >
          HERE
        </a>
      </p>

      <h4>ManageState component to display datas</h4>
      <ManageState />
      <h4>
        ManageEffect component based on useEffect hook, to display and manage
        datas
      </h4>
      <ManageEffect />
      <div className="fetchDataWithHook">
        {/* <br /> */}
        <h4>
          ManageDatas component based on useEffect hook and axios, to fetch
          datas
        </h4>
        <ManageDatas />
      </div>
      <div className="useReducerHook">
        <h4>
          CustomReducerHook component, based on useReducer hook, to manage datas
        </h4>
        {/* <TrySpreadOperator /> */}
        {/* <TodoReducer /> */}
        <CustomReducerHook />
        <h4>
          CustomReducerHook component, based on useReducer hook, to manage
          checkboxes
        </h4>
        <CheckboxAndReducer />
      </div>
    </div>
  );
};

export default App;
