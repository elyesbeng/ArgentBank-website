import React, { useState } from "react";
import "./signIn.css"; // Assurez-vous d'avoir votre fichier CSS correspondant

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href = `${window.location.origin}/user`;
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error); // Afficher un message d'erreur spécifique depuis l'API
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {errorMessage && (
            <p className="mot-de-passe-oublie">{errorMessage}</p>
          )}
        </form>
      </section>
    </main>
  );
}

export default SignIn;