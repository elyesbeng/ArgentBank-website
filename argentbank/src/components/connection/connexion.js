import { setValue } from "mongoose/lib/utils";
import { useState } from "react";


const boutonEnvoi = document.querySelector(".bouton-envoi")
const motDePasseOublie = document.querySelector(".mot-de-passe-oublie")

boutonEnvoi.addEventListener("click", async function (event) {
    const connected = useState(0);
    const email = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const user = {
      email: email,
      password: password,
    };
    // Appel à l'API pour uploader les données du formulaire
    const response = await fetch('http://localhost:5678/api/users/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
      
       /**  console.log(response.json()); */

        if (response.status == 200){
          const data = await response.json();
          console.log(data);
          const value = data.token;
          localStorage.setItem("token", value);
          console.log(value);
          connected = setValue(1);
        
          window.location.href = `${window.location.origin}/index.html`;
          
        }
      
  
        else (response.status >200);{
        motDePasseOublie.style.visibility = 'visible';
  
        };
      const data = await response.json();
      console.log(data);
      const value = data.token;
      localStorage.setItem("token", value);
      console.log(value);


      
  
        
        
        
        
        });