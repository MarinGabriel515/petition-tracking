import React from "react";
import logo from "../resources/logo.PNG"

export default class SignInCard extends React.Component{

constructor(props)
{
    super(props)
    this.handleUsernameChange=this.handleUsernameChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleSignin=this.handleSignin.bind(this)
    this.state={
        username:"",
        password:""
    }
}

handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

handlePasswordChange(event) {
    this.setState({password: event.target.value});
}

handleSignin(){
    this.props.attemptSigninCallback(this.state.username,this.state.password)
}

render()
{
    return (
        <div style={styles.mainDiv}>
            <img style={styles.logo} src={logo} alt="logo img" />
            <h2 style={styles.labels}>Please enter your credentials</h2>
            <form style={styles.form}>
                    <input style={styles.inputs} placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/><br></br>
                    <input style={styles.inputs}placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} /><br></br>
            </form>
            <button style={styles.buttons} onClick={this.handleSignin}>Sign In</button><br></br>
            <button style={styles.buttons} onClick={this.props.backCallback}>Back</button>
        </div>
    )
}

}

var styles={

    mainDiv:{
        width:"80%",
        height:"50%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    },
    labels:{
        
        fontFamily:"Georgia"
    },
    logo:{
        width:"75px",
        height:"75px"
    },
    form:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        width:"80%"
    },
    buttons:{
        width:"175px",
        height:"40px",
        backgroundColor:"orange",
        border:"0",
        color:"white",
        fontWeight:"bold",
    },
    inputs:{
        width:"175px",
        height:"20px",
    }

}