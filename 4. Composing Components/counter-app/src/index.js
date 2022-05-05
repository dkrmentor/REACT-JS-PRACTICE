import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//to importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// import counter
import Counters from './components/counters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Counters />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//props vs state

// props include data tht we give to a component from other component -> read only
// state include data local to private to that component 

// we call arrow on -> on click when we pass argument thru that !! otherwise we can call normal refernce of that function at on click
