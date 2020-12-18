import React from 'react';
import "./App.css"
import { Layout, Menu, Typography, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Beranda, Cv, Portfolio, Sertifikat } from "./Pages"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/sertifikat" component={Sertifikat} />
        <Route path="/cv" component={Cv} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
