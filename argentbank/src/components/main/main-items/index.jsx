import React from "react";

function MainItems({imgSrc, title, p}){

    return(
        <div class="feature-item">
          <img src={imgSrc} alt="Chat Icon" class="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>
            {p}
          </p>
        </div>
    )
}

export default MainItems;