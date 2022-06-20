
import '../../general.css'
import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    let click = 0;




    const togglemenu = () => {
        let review = document.getElementsByClassName('navlist');
        if (click === 0) {
            click = 1;
            review.style.display = 'flex'
        }
        else {
            click = 0;
            review.style.display = 'none';
        }


    }
    return (
        <div className='navbar'>

            <div className="navbarWrapper  font">
                <button id="menu"  onClick={togglemenu} >
                    <div className="menu">
                        <div className="lines"></div>
                        <div className="lines"></div>
                        <div className="lines"></div>
                    </div>
                </button>
                <ul className="navlist">
                    <Link to='/' >  <li className="navitems">Home</li></Link>
                    <li className="navitems">About Me</li>
                    <Link to='/projects' > <li className="navitems">Projects</li></Link>
                    <li className="navitems">Blog</li>
                    <li className="navitems">Hobbies</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar