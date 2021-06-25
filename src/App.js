import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ListPage from "./ListPage";
import CreatePage from "./CreatePage";
import DetailsPage from "./DetailsPage";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Marble Mania</h2>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/create">Craft Marble</Link>
          </p>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            /> 
              <Route 
              path="/marbles/:id" 
              exact
              render={(routerProps) => <DetailsPage {...routerProps} />} 
            />
            <Route 
              path="/create" 
              exact
              render={(routerProps) => <CreatePage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}