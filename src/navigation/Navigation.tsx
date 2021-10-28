import React, { useEffect, useState } from 'react'
import "./Navigation.css"

function Navigation() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.addEventListener("scroll", transitionNavBar); 
        }
    }, []);
    
    return (
        <div className={`navigation ${show && "nav_black"}`}>
            <div className="contents">
                <img
                    className="logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix logo"
                />

                <img
                    className="avatar" 
                    src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" 
                    alt="Avatar"
                />
            </div>

        </div>
    )
}

export default Navigation
