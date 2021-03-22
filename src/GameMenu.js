import { useState } from "react";

const GameMenu = () => {

    const onMenuClickOpen = () => {
        document.getElementById("sideBarClosed").style.position = "relative";
        document.getElementById("sideBarOpened").style.position = "static";
    }

    const onMenuClickClose = () => {
        document.getElementById("sideBarOpened").style.position = "relative";
        document.getElementById("sideBarClosed").style.position = "static";
    }

    const [username, setUsername] = useState();

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
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="password">
                    <input type="text" placeholder="Password"></input>
                </div>
            </div>
        </div>
     );
}
 
export default GameMenu;