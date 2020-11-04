import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'

class App extends React.Component {

  render () {

    return (
      <Router>
        <Route path='/' component={Home}/>
      </Router>
    )
  }
}

export default App