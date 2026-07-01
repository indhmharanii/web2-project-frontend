import "./Login.css";
import laptop from "../../assets/images/rog.png";

function Login() {
  return (
    <div className="login-container">

      <div className="left-side">

        <div className="grid-bg"></div>

        <img
          src={laptop}
          alt="ROG Laptop"
          className="laptop-image"
        />

        <h1>
          Hello.
          <br />
          <span>Welcome Back!</span>
        </h1>

        <p>
          This AI website helps you find laptop recommendations
          based on your budget and needs.
          Let our AI help you find
          the perfect laptop.
        </p>

      </div>

      <div className="right-side">

        <div className="login-card">

          <h2>Login</h2>

          <form>

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />

            </div>

            <div className="remember">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="#">

                Forgot Password?

              </a>

            </div>

            <button>

              Login

            </button>

            <div className="or">

              <span>or continue with</span>

            </div>

            <button
              type="button"
              className="google"
            >

              Continue with Google

            </button>

            <p className="signup">

              Don't have an account?

              <span>

                Sign Up

              </span>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;