import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";

function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
