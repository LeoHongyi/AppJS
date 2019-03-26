import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PriceList from './components/PriceList'

const items = [
  {
    "id" : 1,
    "title": "go to NYC",
    "price": "200",
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "outcome"
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
      "type": "outcome"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PriceList 
          items={items}
          onModifyItem={(item)=>{alert(item.id)}}
          onDeleteItem={(item)=>{alert(item.id)}}
        />
      </div>
    );
  }
}

export default App;
