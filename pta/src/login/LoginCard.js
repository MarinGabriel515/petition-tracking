import React from "react";
import logo from "../resources/logo.PNG"

export default class LoginCard extends React.Component{

constructor(props)
{
    super(props)
}

render()
{
    return (
        <div style={styles.mainDiv}>
            <img style={styles.logo} src={logo} alt="logo img" />
            <h2 style={styles.labels}>Please enter your credentials</h2>
            <form style={styles.form}>
                    <input style={styles.inputs} placeholder="Username" type="text" name="username" /><br></br>
                    <input style={styles.inputs}placeholder="Password" type="password" name="password" /><br></br>
                <input style={styles.buttons} type="submit" value="Login" /><br></br>
            </form>
            <button style={styles.buttons}>Back</button>
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
        backgroundColor:"#68EA8D",
        border:"0",
        color:"white",
        fontWeight:"bold",
    },
    inputs:{
        width:"175px",
        height:"20px",
    }

}