const GameMenu = () => {

    const onMenuClickOpen = () => {
        document.getElementById("sideBarClosed").style.position = "relative";
        document.getElementById("sideBarOpened").style.position = "static";
    }

    const onMenuClickClose = () => {
        document.getElementById("sideBarOpened").style.position = "relative";
        document.getElementById("sideBarClosed").style.position = "static";
    }

    return ( 
        <div>
            <div id="sideBarOpened">
                <button onClick={onMenuClickOpen} className="menu-button">=</button>
            </div>
            
            <div id="sideBarClosed" className="sidebar">
                <button onClick={onMenuClickClose}>=</button>

                <input type="text" className="username"></input>
                <input type="text" className="password"></input>
            </div>
        </div>
     );
}
 
export default GameMenu;