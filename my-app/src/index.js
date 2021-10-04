import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let  results  =  []

let render = () => {
  ReactDOM.render(
    App(results),
    document.getElementById('root')
  );
}

fetch('http://localhost:8000/shoesshoe/',  {
  method:  'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response =>  response.json())
.then(data => {
  results =  data
  render()
})
.catch((error)  =>  {
  console.error('Error:', error)
})



render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
