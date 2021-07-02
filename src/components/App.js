import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <div className="">
      < BrowserRouter>
        {/* <Navbar /> */}
        {/* <div className="container mt-5">
          <div className="row"> */}
            <Route exact path="/" component={Home}/> 
          {/* </div>
        </div> */}
        <Route exact path="/beers" component={Beers}/>
        {/* NÃO ESTÁ REDIRECIONANDO PARA BEERDETAILS*/}
        <Route path="/beers/:beerId" component={BeerDetails}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
