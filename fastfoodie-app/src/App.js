import React from 'react';
import Home from '../src/components/Pages/Home'
import Header from '../src/components/Header/index'
import Footer from '../src/components/Footer/index'
import NavBar from '../src/components/Navbar/index'

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
