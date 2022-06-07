import React, { Component } from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Login />
      </div>
    )
  }
}

export default App;
