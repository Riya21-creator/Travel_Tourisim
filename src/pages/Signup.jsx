import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Signup</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
