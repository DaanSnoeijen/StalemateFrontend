import ChessBoard from './ChessBoard';
import GameMenu from './GameMenu';
import LoggedIn from './LoggedIn';

const MainPage = () => {
    return ( 
        <div className="main-page">
            <h1>Stalemate</h1>
            <ChessBoard />
            <div className="game-menu">
                <GameMenu />
            </div>
            <div className="logged-in">
                <LoggedIn />
            </div>
        </div>
     );
}
 
export default MainPage;