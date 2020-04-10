import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
// import './custom.css'
import Login from '../views/login'
import RegisterUser from '../views/registerUser'
import Rotas from './rotas'


class App extends React.Component {

  render(){
    return(
      <div>
        <Rotas />
      </div>
      // <Login />
      // <RegisterUser />
    );
  }

}
    

export default App;
