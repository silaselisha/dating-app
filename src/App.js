import React from "react"
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import TinderCards from './components/TinderCards'
import './App.css'
import Buttons from "./components/Buttons"
import Chats from "./components/Chats"


const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <TinderCards />
            <Buttons />
          </Route>
          <Route path='/chat'>
            <Header backButton='/'/>
            <Chats />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App