import './App.css';
import { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import BloodPressure from './components/bloodpressure/BloodPressure';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Historical from './components/historical/Historical';
import BMI from './components/bmi/BMI';

export default class App extends Component {

  render() {
    var white = "#FFFFFF";
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <header className="App-header">
            <Route exact path = "/" component = { Historical }/>
            <Route exact path = "/bloodpressure" component = { BloodPressure }/>
            <Route exact path = "/bmi" component = { BMI }/>
            <Route exact path="/historical" component = { Historical }/>
          </header>
        </div>
      </Router>
    );
  }

}
