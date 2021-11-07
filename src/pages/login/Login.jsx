import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">
            <h2>SocialApp</h2>
            <span>
              Connect with friends and the world around you on SocialApp.
            </span>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="email" />
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <button className="loginBtn">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginNewAccount">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
