import { useState } from "react";

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

    function LogIn(e){
        e.preventDefault();
        props.functionCallFromParent(username);
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
            </div>
        </div>
     );
}
 
export default GameMenu;