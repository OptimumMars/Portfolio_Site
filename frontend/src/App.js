import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <Navigation />
      <Switch>
      </Switch>
    </>
  );
}

export default App;
