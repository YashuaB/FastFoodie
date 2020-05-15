import React from 'react';
import Home from '../src/components/Pages/Home'
import Header from '../src/components/Header/index'
import Footer from '../src/components/Footer/index'
// import NavBar from '../src/components/Navbar/index'
// import ResultPage from './components/Pages/ResultsPage';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
     
      <Home />
      <Footer />
    </Wrapper>
  );
}

export default App;
