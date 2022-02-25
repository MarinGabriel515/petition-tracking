import React from 'react';
import Login from './login/Login';
import Dashboard from './mainBody/Dashboard';
import Register from './login/Register';

export default class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.handleLoginOk=this.handleLoginOk.bind(this)
    this.handleLogout=this.handleLogout.bind(this)
    this.handleBeginRegister=this.handleBeginRegister.bind(this)
    this.handleCancelRegister=this.handleCancelRegister.bind(this)

    this.state={
      logged:false,
      registering:false
    }
  }

  handleLoginOk()
  {
    this.setState({logged:true})
  }

  handleLogout()
  {
    console.log("TBD")
  }

  handleBeginRegister()
  {
    this.setState({registering:true})
  }

  handleCancelRegister()
  {
    this.setState({registering:false})
  }

  render(){
    
    let rendered;
    this.state.logged ? rendered=<Dashboard/> : this.state.registering ? rendered=<Register/> : rendered=<Login loginOk={this.handleLoginOk} beginRegister={this.handleBeginRegister}/>
    
    return (
      <div>
        {rendered}
      </div>  
  );
}

}

