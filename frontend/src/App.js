import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import GarageAdd from './Components/AddAGarage';
import CarAdd from './Components/AddACar';
import Cars from './Components/AllCars';
import Garages from './Components/AllGarages';
import CarID from './Components/CarById';
import CarName from './Components/CarByName';
import GarageID from './Components/GarageById';
import Home from './Components/Homepage';
import Nav from './Components/Navigation';

function App() {
  return (
    <Router>
        <Nav/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/cars/create">
                <CarAdd/>
            </Route>
            <Route exact path="/garage/create">
                <GarageAdd/>
            </Route>
            <Route exact path="/garage/all">
                <Garages/>
            </Route>
            <Route exact path="/cars/all">
                <Cars/>
            </Route>
            <Route exact path="/cars/readbyid/:id">
                <CarID/>
            </Route>
            <Route exact path="/car/readbyname/:name">
                <CarName/>
            </Route>
            <Route exact path="/garage/readbyid/:id">
                <GarageID/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
