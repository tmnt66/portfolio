
import '../../general.css'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let click = 0;
    const togglemenu = () => {
        console.log('clicked')
        let review = document.querySelector('.navlist');
        if (click === 1) {
            click = 0;
            review.style.right = '55px';
            // review.style.cl
        }
        else {
            click = 1;
            review.style.right = '-372px';
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
                    <Link to='/resume' >  <li className="navitems">Resume</li></Link>
                    {/* <li className="navitems">About Me</li> */}
                    <Link to='/projects' > <li className="navitems">Projects</li></Link>
                    <Link to='/contact' > <li className="navitems">Contact me</li></Link> 
                    {/* <li className="navitems">Hobbies</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar