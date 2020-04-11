import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import '../main/custom.css'
import '../index.css'
import Rotas from './rotas'
import NavBar from '../components/navbar'


class App extends React.Component {

  render(){
    return(
      <>
      <NavBar />
      <div className="container">
        <Rotas />
      </div>
      </>
    );
  }

}
    

export default App;
