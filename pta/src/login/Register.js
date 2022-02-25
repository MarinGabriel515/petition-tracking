import React from "react";

export default class Register extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Nume:"",
            Prenume:"",
            Email:"",
            CNP:""
        }
    }

    render(){
        return(
            <div>
                <h2>Register</h2>
                <form>
                    <input placeholder="Nume" type="text" name="nume" value={this.state.Nume}></input>
                    <input placeholder="Prenume" type="text" name="prenume" value={this.state.Prenume}></input>
                    <input placeholder="CNP" type="text" name="cnp" value={this.state.CNP}></input>
                    <input placeholder="Email" type="text" name="email" value={this.state.Email}></input>
                </form>
                <button>Register</button><br></br>
                <button>Cancel</button>
            </div>
        )
    }
}

var styles = {
    
}
