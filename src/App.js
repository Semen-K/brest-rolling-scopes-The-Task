import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Component/layouts/Header/header';
import Footer from './Component/layouts/Footer/footer';
import Contact from './Component/container/ContainerForContact';
import Portfolio from './Component/views/Portfolio/Portfolio';
/*import NEwslider from './Component/layouts/Content/NewSlaideJS/NewSlider';
import Learn from './Component/views/Learn/Learn';
import Write from './Component/views/Write/Write';
import Chat from './Component/views/Chat/Chat';*/

class App extends Component {
  render() {
    return (
      <div className="Page">
          <Header />
	        <article>
	          <Switch>
	         {/*	<Route exact path="/" component={NEwslider} />
	            <Route path="/Learn" component={Learn} />*/}
	            <Route path="/Portfolio" component={Portfolio} />
	            <Route path="/Contact" component={Contact} />
	      	{/*	<Route path="/Write" component={Write} />
	            <Route path="/Chat" component={Chat} />*/}
	           </Switch>
	        </article>
          <Footer />
      </div>
    )
  }
}

export default App;