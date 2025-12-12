import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

/*
  Optional: replace this with your real auth state (context, redux, etc.)
  For demo I'm using local state `isLoggedIn` (false = not logged).
*/
function Navbar({ isLoggedIn = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo"><Link to="/">Travel & Tourism</Link></div>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link></li>
        <li><Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link></li>
        <li><Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link></li>

        {/* Always-visible Payment link */}
        <li><Link to="/payment" onClick={() => setIsOpen(false)}>Payment</Link></li>

        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

        {/* RIGHT SIDE: auth actions */}
        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              {/* when logged in you can show avatar / dashboard / logout */}
              <Link to="/dashboard" className="auth-btn" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <button className="auth-btn logout" onClick={() => { /* call logout */ }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-btn" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/signup" className="auth-btn signup" onClick={() => setIsOpen(false)}>Signup</Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
