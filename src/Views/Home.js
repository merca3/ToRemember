import {NavLink} from "react-router-dom";
import Remember from "../Components/StartToRemember";
import Clock from "../Components/Clock";

function Home() {
    const happiness = "Yay!";

    return (
        <div>
            <Remember happy={happiness} />
            <NavLink to="/xo-game">
                <div className="">
                    <button className="">Go to Tic-Toe Game!</button>
                </div>
            </NavLink>
            <NavLink to="/click-coin-game">
                <div className="">
                    <button className="">Go to Click-Coin Game!</button>
                </div>
            </NavLink>
            <NavLink to="/convert">
                <div className="">
                    <button className="">Convert Currency!</button>
                </div>
            </NavLink>
            <Clock />
        </div>
    )
}

export default Home;