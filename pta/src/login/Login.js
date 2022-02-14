import React from "react";
import carouselImage1 from "../resources/sltg3.gif";
import carouselImage2 from "../resources/sltg4.gif";
import carouselImage3 from "../resources/sltg.gif";
import PortalCard from "./PortalCard";
import LoginCard from "./LoginCard";
import SignInCard from "./SignInCard";

export default class Login extends React.Component{

    constructor(props)
    {
        super(props)
        this.loginPress=this.loginPress.bind(this)
        this.signinPress=this.signinPress.bind(this)
        this.backPress=this.backPress.bind(this)
        this.state={
            carouselImageNumber:Math.floor(Math.random() * 3),
            portalVisible:true,
            loginVisible:false,
            signinVisible:false
        }
    }

    setPortalVisible(value)
    {
        this.setState({portalVisible:value})
    }

    setLoginVisible(value)
    {
        this.setState({loginVisible:value});
    }

    setSigninVisible(value)
    {
        this.setState({signinVisible:value});
    }

    loginPress()
    {
        this.setPortalVisible(false);
        this.setLoginVisible(true)
        this.setSigninVisible(false)
    }

    signinPress()
    {
        this.setPortalVisible(false);
        this.setSigninVisible(true)
        this.setLoginVisible(false)
    }

    backPress()
    {
        this.setPortalVisible(true)
        this.setLoginVisible(false)
        this.setSigninVisible(false)
    }

    render()
    {

        let renderedCarouselImage;

        if(this.state.carouselImageNumber===0)
        renderedCarouselImage=carouselImage1
        else if(this.state.carouselImageNumber===1)
        renderedCarouselImage=carouselImage2
        else
        renderedCarouselImage=carouselImage3

        return (
            <div style={styles.mainContainer}>
                <div style={styles.leftContainer}>
                    <img style={styles.image} src={renderedCarouselImage} alt="Carousel img"/>
                </div> 
                <div style={styles.rightContainer}>
                    {this.state.portalVisible ? <PortalCard loginCallback={this.loginPress} signinCallback={this.signinPress}/> : this.state.loginVisible ? <LoginCard backCallback={this.backPress}/> : <SignInCard backCallback={this.backPress}/>}
                </div>     
            </div>
        );
    }

}

var styles = {

    mainContainer:{
        display: 'flex',
        flexDirection: 'row',
        height:'95vh',
        marginTop:'15px',
        padding:'0'
    },
    rightContainer:{
        width: '35%',
        height:'100%',
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    leftContainer:{
        width: '65%',
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width:"auto",
        height:"auto",
        margin:"auto"
    },
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
    logo:{
        width:"75px",
        height:"75px"
    },
    welcomeText:{
        color:"green",
        fontFamily:"Georgia"
    }
}