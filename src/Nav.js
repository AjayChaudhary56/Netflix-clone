import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const[show ,handleshow]= useState(false);


const transitionNavbar=()=>{
  if(window.scrollY > 100){
    handleshow(true)
  }
  else{
    handleshow(false)
  }
}

useEffect(() => {
window.addEventListener("scroll",transitionNavbar );
return()=> window.removeEventListener("scroll",transitionNavbar)
}, [])



  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="navbar_contents">
        <div className="navbar_logo">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix_logo"
          />
        </div>
        <div className="navbar_avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix_avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
