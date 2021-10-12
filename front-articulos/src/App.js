import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListArticulosComponent from "./component/articulos/ListArticulosComponent";
import AddArticuloComponent from "./component/articulos/AddArticuloComponent";
import EditArticuloComponent from "./component/articulos/EditArticuloComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-10" >
                  <Switch>
                      <Route path="/" exact component={ListArticulosComponent} />
                      <Route path="/articulos" component={ListArticulosComponent} />
                      <Route path="/nuevo-articulo" component={AddArticuloComponent} />
                      <Route path="/editar-articulo" component={EditArticuloComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
