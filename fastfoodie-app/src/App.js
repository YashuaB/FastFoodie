import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from '../src/components/Pages/Home'
import Header from '../src/components/Header/index'
import Footer from '../src/components/Footer/index'
// import NavBar from '../src/components/Navbar/index'
// import ResultPage from './components/Pages/ResultsPage';
import Wrapper from './components/Wrapper';
import ResultPage from './components/Pages/ResultsPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Wrapper>
        <Header />
          <Route path="/" exact component={Home} />
          <Route path="/result-page" exact component={ResultPage}/>
        <Footer />
      </Wrapper>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
