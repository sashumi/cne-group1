import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import GarageAdd from './Components/AddAGarage';
import CarAdd from './Components/AddACar';
import CarID from './Components/CarById';
import CarName from './Components/CarByName';
import GarageID from './Components/GarageById';
import Home from './Components/Homepage';
import Nav from './Components/Navigation';
import NewGarage from './Components/NewGarage';
import NewCar from './Components/NewCar';
import GetAllGarage from './Components/GetAllGarage';
import GetAllCars from './Components/GetAllCars';

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
                <NewCar/>
            </Route>
            <Route exact path="/garage/create">
                <GarageAdd/>
                <NewGarage/>
            </Route>
            <Route exact path="/garage/all">
                <GetAllGarage/>
            </Route>
            <Route exact path="/cars/all">
                <GetAllCars/>
            </Route>
            <Route exact path="/cars/readbyid/:id">
                <CarID/>
            </Route>
            <Route exact path="/cars/readbyname/:name">
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
