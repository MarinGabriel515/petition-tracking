import React from "react";
import logo from "../resources/logo.PNG"

export default class PortalCard extends React.Component{

constructor(props)
{
    super(props)
}

render()
{
    return ( 
        <div style={styles.welcomeContainer}>
            <img style={styles.logo} src={logo} alt="logo img" />
            <h2 style={styles.welcomeText}>Welcome to PTA!</h2>
            <button onClick={this.props.signinCallback} style={styles.buttonSignIn}>Sign In</button><br></br>
            <button onClick={this.props.loginCallback}  style={styles.buttonLogIn}>Log In</button>
        </div>
    )
}
}

var styles={

    welcomeContainer:{
        width:"80%",
        height:"40%",
        top:"40%",
        //right:"10%",
        margin: "0",
        //position: "absolute",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
    },
    logo:{
        width:"75px",
        height:"75px"
    },
    welcomeText:{
        //color:"green",
        fontFamily:"Georgia"
    },
    buttonSignIn:{
        width:"175px",
        height:"40px",
        backgroundColor:"orange",
        border:"0",
        color:"white",
        fontWeight:"bold",
        marginTop:"5px"
    },
    buttonLogIn:{
        width:"175px",
        height:"40px",
        backgroundColor:"#68EA8D",
        border:"0",
        color:"white",
        fontWeight:"bold",
        marginTop:"5px"
    },
}