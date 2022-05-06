import { Component } from "react";

class Generator extends Component {

    generate_password = () => {
        let password = ""
        
        for(let i = 0; i < 16; i++) {
            let char = String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33));
            password = password + char;
        }

        return password
    }

    render() {
        return(
            <div>
                <p id="pass"> { this.generate_password() } </p>
            </div>
        )
    }
}

export default Generator;