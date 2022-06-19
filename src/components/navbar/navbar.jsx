import { useState } from 'react';
import '../../general.css'
import './navbar.css'

const Navbar = () => {
    let click = 0;




 const togglemenu = ()=> {
    let review = document.getElementsByClassName('navlist');
    if(click==0){
          click=1;
       review.style.display='flex'
    }
    else{
        click=0;
        review.style.display='none'
    }

  
}
    return (
        <div className="navbarWrapper  font">
              <a id="menu" href="#" onClick={togglemenu} >
            <div className="menu">
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
        </a>
            <ul className="navlist">
                <li className="navitems">About Me</li>
                <li className="navitems">Projects</li>
                <li className="navitems">Blog</li>
                <li className="navitems">Hobbies</li>
            </ul>
        </div>
    )
}

export default Navbar