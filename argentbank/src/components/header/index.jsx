import './header.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import React from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { token } = useSelector((state) => state.auth);
  console.log(user);
  const switchLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    localStorage.removeItem("AuthToken", token);
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token ? (
        <div>
          <Link to="/" className="main-nav-item" onClick={switchLogout}>
            Sign Out
          </Link>
          <Link to="/user" className='user-link'>
            {user.userName}
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signIn" className="main-nav-item">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;