import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ClickCoin from "./Views/ClickCoin";
import ConvertCurrency from "./Views/ConvertCurrency";
import Home from "./Views/Home";
import Game from "./Views/XOGame";


function App() {

    return (
        <div className="m-3">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/xo-game">
                        <Game />
                    </Route>
                    <Route exact path="/click-coin-game">
                        <ClickCoin />
                    </Route>
                    <Route exact path="/convert">
                        <ConvertCurrency />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
