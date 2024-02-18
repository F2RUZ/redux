// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import { combineReducers, createStore } from "redux";

const initiaState = {
  counter: 0,
  name: "Noname",
};

// --Reducer -- Counter
const CounterReducer = (state = initiaState.counter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
};

const replaceName = (state = initiaState.name, action) => {
  switch (action.type) {
    case "Muhammad":
      return "Muhammad";

    case "Umar":
      return "Umar";

    default:
      return "Noname";
  }
};

const rootReducer = combineReducers({
  counter: CounterReducer,
  name: replaceName,
});

const store = createStore(rootReducer);
store.getState();

//Create Elements

const title = document.createElement("h1");
const inc = document.createElement("button");
const dec = document.createElement("button");
const reset = document.createElement("button");

title.textContent = store.getState().counter;
inc.textContent = "Plus";
dec.textContent = "minus";
reset.textContent = "Reset";

document.body.append(title, inc, dec, reset);

//  EVENT ADD (Hodisa qoshish )

inc.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

dec.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});

// Change Name Reducer

const heading = document.createElement("h1");
const Muhammad = document.createElement("button");
const Umar = document.createElement("button");

heading.textContent = store.getState().name;
Muhammad.textContent = "Muhammad";
Umar.textContent = "Umar";
document.body.append(heading, Muhammad, Umar);

Muhammad.addEventListener("click", () => {
  store.dispatch({ type: "Muhammad" });
});
Umar.addEventListener("click", () => {
  store.dispatch({ type: "Umar" });
});

store.subscribe(() => {
  heading.textContent = store.getState().name;
  title.textContent = store.getState().counter;
});
salom hammaga
