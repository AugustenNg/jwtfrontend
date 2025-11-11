import './login.scss'
import { useHistory } from "react-router-dom";

const Login = (props) => {

    let history = useHistory();
    const handleCreateNewAccount = () => {
        // alert("Redirect to register page")
        history.push("/register");
    }
    return (<div className="login-container">
        <div className="container pt-3">
            <div className="row px-3 px-sm-0">
                <div className="content-left align-content-center col-12 col-sm-7 d-sm-block d-none">
                    <div className="brand">
                        HUY NGUYEN
                    </div>
                    <div className="details">
                        HUY help you to find job, connect with us to get more information
                    </div>
                </div>
                <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 ">
                    <div className="brand d-sm-none d-block text-center">
                        HUY NGUYEN
                    </div>
                    <input type="text" className="form-control" placeholder="Email or your username"/>
                    <input type="password" className="form-control" placeholder="Password"/>
                    <button className="login btn btn-primary" type="submit">
                        Login
                    </button>
                    <span className="text-center">
                            <a href="#" className="forgot-password">
                              Forgot your password
                            </a>
                        </span>
                    <hr/>
                    <div className="text-center">
                        <button className="register btn btn-success mb-3" type="submit" onClick={ () => handleCreateNewAccount()}>
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default Login;
