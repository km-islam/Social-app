import "./register.css";

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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password Again" />
            <button className="loginBtn">Sign Up</button>
            <button className="loginNewAccount">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
