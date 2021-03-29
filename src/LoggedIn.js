import { useState } from "react";

const LoggedIn = () => {

    const [username, setUsername] = useState();
    const [elo, setElo] = useState();

    function SetConsts() {
        setUsername("Clownpusher");
        setElo("1369");
    }

    return ( 
        <div>
            <h4>Logged in as: {username}</h4>
            <h4>Elo: {elo}</h4>
            <button onClick={SetConsts}>Set</button>
        </div>
     );
}
 
export default LoggedIn;