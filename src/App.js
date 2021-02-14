import './App.css';
import { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import BloodPressure from './components/bloodpressure/BloodPressure';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Historical from './components/historical/Historical';

export default class App extends Component {

  render() {
    var white = "#FFFFFF";
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <header className="App-header">
            <Route exact path = "/" component = { BloodPressure }/>
            <Route exact path = "/bloodpressure" component = { BloodPressure }/>
            <Route exact path="/historical" component = { Historical }/>
          </header>
        </div>
      </Router>
    );
  }

}
