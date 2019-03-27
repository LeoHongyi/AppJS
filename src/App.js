import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import PriceList from './components/PriceList'
import Home from './containers/Home'
const items = [
  {
    "id" : 1,
    "title": "go to NYC",
    "price": "200",
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id" : 2,
    "title": "go to EWR",
    "price": "300",
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
export default App;
