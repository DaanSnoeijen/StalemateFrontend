
function LoggedIn(props) {
    
    const username = props.Username;
    const elo = props.Elo;

    return (
        <div className="logged-in">
            <h4>Logged in as: {username}</h4>
            <h4>Elo: {elo}</h4>
        </div>
     );
}
 
export default LoggedIn;