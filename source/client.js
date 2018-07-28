import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import data from "./data.json";

//ReactDOM.render(<App name={data.name} age={data.age}/>, document.getElementById('react'))
ReactDOM.render(<App {...data}/>, document.getElementById('react'))