import './App.scss';
import Nav from "./component/Navigation/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./component/Login/login";

function App() {
    return (
        <Router>
            <div className="app-container">
                {/*<Nav/>*/}
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/about">
                        About
                    </Route>
                    <Route path="/" exact>
                        Home
                    </Route>
                    <Route path="/contact">
                        Contact
                    </Route>
                    <Route path="/news">
                        News
                    </Route>
                    <Route path="*">
                        404 Not Found
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
