import React from 'react';

import '../main/custom.css'
import '../index.css'
import Routes from './routes'
import NavBar from '../components/navbar'

import 'bootswatch/dist/flatly/bootstrap.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

class App extends React.Component {

  render(){
    return(
      <>
      <NavBar />
      <div className="container">
        <Routes />
      </div>
      </>
    );
  }

}
    

export default App;
