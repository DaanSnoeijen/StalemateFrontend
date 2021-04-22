import { useState } from "react";
import axios from 'axios';

const GameMenu = (props) => {

    const onMenuClickOpen = () => {
        document.getElementById("sideBarClosed").style.position = "relative";
        document.getElementById("sideBarOpened").style.position = "static";
    }

    const onMenuClickClose = () => {
        document.getElementById("sideBarOpened").style.position = "relative";
        document.getElementById("sideBarClosed").style.position = "static";
    }

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [elo, setElo] = useState();

    function LogIn(e){
        e.preventDefault();

        axios.get('http://localhost:3000/api/player/getPlayer', { username, password })
            .then((response) => {
                console.log(response.data);

                if (response.data == null){
                    alert("Verkeerde inloggegevens!")
                }
                else{
                    alert("U bent ingelogd!");

                    setUsername(response.data.username);
                    setElo(response.data.elo);
                }
            })
            .catch((error) => {
                console.log(error);
            })

        props.functionCallFromParent(username, elo);
    }

    function Register(){
        axios.get('http://localhost:3000/api/player/postPlayer', { username, password })
            .then((response) => {
                console.log(response.data);
                alert("Account aangemaakt!");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return ( 
        <div>
            <div id="sideBarOpened">
                <button onClick={onMenuClickOpen} className="menu-button">=</button>
            </div>
            
            <div id="sideBarClosed" className="sidebar">
                <div className="button">
                    <button onClick={onMenuClickClose}>=</button>
                </div>
                <div className="username">
                    <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}></input>
                </div>
                <div className="password">
                    <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></input>
                </div>
                <div className="login-button">
                    <button className="buttonLogIn" onClick={LogIn.bind(this)}>Log in</button>
                </div>
                <div className="register-button">
                    <button className="buttonRegister" onClick={Register}>Register</button>
                </div>
            </div>
        </div>
     );
}
 
export default GameMenu;