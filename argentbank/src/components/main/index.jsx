import React from "react";
import './main.css'
import Banner from '../banner';
import Items from './main-items'

function main(){
    return(
      <div>
        <Banner/>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <Items 
            imgSrc={"./img/icon-chat.png"} 
            title={"You are our #1 priority"} 
            p={'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'} 
          />
          <Items 
            imgSrc={"./img/icon-money.png"} 
            title={"More savings means higher rates"} 
            p={' The more you save with us, the higher your interest rate will be!'} 
          />
          <Items 
            imgSrc={"./img/icon-security.png"} 
            title={"Security you can trust"} 
            p={'We use top of the line encryption to make sure your data and money is always safe.'} 
          />
        </section>
    </div>
    )

}

export default main;