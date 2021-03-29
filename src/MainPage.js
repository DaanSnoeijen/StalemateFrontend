import { useState } from 'react';
import ChessBoard from './ChessBoard';
import GameMenu from './GameMenu';
import LoggedIn from './LoggedIn';

const MainPage = () => {

    const [username, setUsername] = useState();
    const elo = "1369";

    const parentFunction = (Username) => {
        setUsername(Username);
        console.log(username);
    }

    return ( 
        <div className="main-page">
            <h1>Stalemate</h1>
            <ChessBoard />
            <div className="game-menu">
                <GameMenu functionCallFromParent={parentFunction.bind(this)} />
            </div>
            <div className="logged-in">
                <LoggedIn Username={username} Elo={elo} />
            </div>
        </div>
     );
}
 
export default MainPage;