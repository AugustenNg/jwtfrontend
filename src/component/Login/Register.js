import './login.scss'
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [phone, setPhone] = useState("");
    const [validDefault, setValidDefault] = useState({
        isValidEmail: true,
        isValidUsername: true,
        isValidPassword: true,
        isValidPassword2: true,
        isValidPhone: true,
    });
    const [checkValid, setCheckValid] = useState(validDefault)


    let history = useHistory();

    //handle redirect to login page
    const handleToLogin = () => {
        // alert("Redirect to register page")
        history.push("/login");
    }


    //Validate input
    const validateInput = () => {
        let re = /\S+@\S+\.\S+/;
        setCheckValid(validDefault); //reset validate
        if (!email) {
            toast.error("Please enter a valid email!");
            setCheckValid({...validDefault, isValidEmail: false});
            return false;
        } else {
            if (!re.test(email)) {
                toast.error("Please enter a valid email format!");
                setCheckValid({...validDefault, isValidEmail: false});
                return false;
            }
        }
        if (!username) {
            toast.error("Please enter a valid username!");
            setCheckValid({...validDefault, isValidUsername: false});
            return false;
        }
        if (!password) {
            toast.error("Please enter a valid password!");
            setCheckValid({...validDefault, isValidPassword: false});
            return false;
        }
        if (password !== password2) {
            toast.error("Password confirmation does not match!");
            setCheckValid({...validDefault, isValidPassword: false, isValidPassword2: false});
            return false;
        }
        return true;
    }


    //handle register
    const handleRegister = async () => {
        let check = validateInput();
        let userData = {email, username, password, password2, phone}
        if (check === true) {
            //call api register
            toast.success("Waiting Register", {autoClose: 1000});
            let register = await axios.post("http://localhost:8888/api/v1/register-user", {userData});
            if (register && register.data) {
                if (register.data.EC === 0) {
                    toast.success(register.data.EM);
                    //redirect to login page
                    history.push("/login");
                } else {
                    toast.error(register.data.EM);
                }
            }
            // console.log(register)
            // console.log(register.data);
            // console.log(">>> Check register: ", userData);
        }
    }


    return (
        <div className="register-container">
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
                        <div className="form-group">
                            <label htmlFor="email">Enter your email:</label>
                            <input name="email" type="email"
                                   className={checkValid.isValidEmail ? 'form-control' : 'form-control is-invalid'}
                                   placeholder="Enter your Email "
                                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Enter your username:</label>
                            <input name="username" type="text"
                                   className={checkValid.isValidUsername ? 'form-control' : 'form-control is-invalid'}
                                   placeholder="Enter your username"
                                   value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter your password:</label>
                            <input name="password" type="password"
                                   className={checkValid.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                                   placeholder="Enter your password"
                                   value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Re-Enter your password:</label>
                            <input name="password2" type="password"
                                   className={checkValid.isValidPassword2 ? 'form-control' : 'form-control is-invalid'}
                                   placeholder="Re-Enter your password"
                                   value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Enter your Phone:</label>
                            <input name="phone" type="password"
                                   className={checkValid.isValidPhone ? 'form-control' : 'form-control is-invalid'}
                                   placeholder="Enter your phonenumber"
                                   value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <button className="login btn btn-primary" onClick={() => handleRegister()} type="submit">
                            Register
                        </button>
                        <span className="text-center">
                            <a href="#" className="forgot-password">
                              Forgot your password
                            </a>
                        </span>
                        <hr/>
                        <div className="text-center">
                            <button className="register btn btn-success mb-3" type="submit"
                                    onClick={() => handleToLogin()}>
                                Already have an account? Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Register;
