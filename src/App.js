import './App.css';
import { Component } from 'react';
import DailyInput from './components/DailyInput';
import BPBar from './components/BPBar';
import BPInfo from './components/BPInfo';

export default class App extends Component {

  render(){
    var white = "#FFFFFF";
    return (
      <div className="App">
        <header className="App-header">
          <DailyInput/>
          <BPInfo/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </header>
      </div>
    );
  }
  
}
