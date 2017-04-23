import React, { Component } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import NEwslider from './Content/NewSlaideJS/NewSlider.js';

class App extends Component {
  render() {  
    return (
      <div>     
          <Header />
          <NEwslider/>
          <Footer />
      </div>
    );      
  }
}

export default App;

