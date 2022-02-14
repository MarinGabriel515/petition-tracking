import React from 'react';
import Login from './login/Login';

export default class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={
      logged:false
    }
  }

  render(){
    
    let rendered;
    this.state.logged ? rendered=null : rendered=<Login/>
    
    return (
      <div>
        {rendered}
      </div>  
  );
}

}

