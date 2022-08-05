import React from "react"
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import TinderCards from './components/TinderCards'
import './App.css'
import Buttons from "./components/Buttons"


const App = () => {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <TinderCards />
            <Buttons />
          </Route>
          <Route path='/chat'>
            <h1>Chat page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App