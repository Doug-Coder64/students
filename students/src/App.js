import './App.css';
import React, {Component} from 'react';
import { Students } from './components/Students'

class App extends Component {
  
  render(){
    return (
    <div className="card">
      <div className="card-body">
          <h5 className="card-title">Students Name </h5>
          <h6 className="card-subtitle mb-2 text-muted">Student</h6>
          <p className="card-text">words</p>
          <Students />
        </div>
    </div>
    );
  }
}

export default App;
