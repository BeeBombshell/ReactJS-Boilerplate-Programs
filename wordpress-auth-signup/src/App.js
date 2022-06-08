import React, { Component } from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <SignUp />
      </div>
    )
  }
}

export default App;
