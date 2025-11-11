import './App.scss';
import Nav from "./component/Navigation/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./component/Login/login";
import Register from "./component/Login/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <Router>
            <div className="app-container">
                {/*<Nav/>*/}
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </Router>

    );
}

export default App;
