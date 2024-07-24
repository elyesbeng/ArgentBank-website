import React, { useState, useEffect } from "react";
import './user.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, updateUsername } from "../redux/services/userActions";
import { useNavigate } from "react-router-dom";

export default function User() {
  const user = useSelector((state) => state.auth.user);
  const [currentUserName, setCurrentUserName] = useState(user ? user.userName : "");
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(currentUserName);
  const token = localStorage.getItem("AuthToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (!token) {
        navigate("/Sign-in");
        return;
      }

      try {
        await getUserInfo(token, dispatch);
        if (user && user.userName) {
          setCurrentUserName(user.userName);
        }
      } catch (error) {
        alert("Failed to fetch user profile");
        console.error("Failed to fetch user profile: ", error);
      }
    }

    fetchData();
  }, [token, navigate, dispatch, user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      await updateUsername(token, newUserName, dispatch);
      const updatedUser = { ...user, userName: newUserName };
      setCurrentUserName(newUserName);
      setIsEditing(false);
    } catch (error) {
      alert("Failed to update user name");
      console.error("Failed to update user name: ", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName(currentUserName); // Reset newUserName to the currentUserName
  };

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <div className="editing-header">
          <h1>Edit user info</h1>
          <div className="form-editing">
            <div className="input-Name">
              <p>Last Name:</p>
              <p className="First-lastName">{user.lastName}</p>
            </div>
            <div className="input-Name">
              <p>First Name:</p>
              <p className="First-lastName">{user.firstName}</p>
            </div>
            <div className="input-new-user-name">
              <label htmlFor="New-user-Name">User Name:</label>
              <input
                type="text"
                id="New-user-Name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back<br />{currentUserName}</h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}