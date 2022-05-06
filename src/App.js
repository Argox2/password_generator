import React, {Component} from "react";
import Generator from "./Generator";
import "./style.css";

class App extends Component {
    
    render() {
        return(
            <div>
                <p>PASSWORD GENERATOR TOOL</p>
                <h1>Generate a secure password</h1>
                <p>Use our online password generator to instantly create a secure, random password.</p>
                <Generator />
                <h2>Customize your password</h2>
            </div>
        )
    }
}

export default App;