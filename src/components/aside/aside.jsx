import Button1 from '../button1/button'
import './aside.css'
import '../../general.css'

const Aside = () => {
    return (
        <div className="asideWrapper font">
            <div className="profileimg">
               <img src="./20179009_img.jpg" alt="profile_photo" />
            </div>
            <h4>Branzil .</h4>
            <div className="status">
                Web Development/Coding
            </div>
            <div className="socialLinks">
            </div>
            <div className="personalInfo">
                <h4>Personal Information</h4>
                <div>
                    BIRTHDAY :27 March 1998
                    <br/>
                    PHONE : +91 8279951110
                    <br/>
                    MAIL : branzil1729@gmail.com
                    <br/>
                    Location : Bharuch , Gujrat
                </div>
                <Button1 title='Download CV'/>
            </div>
        </div>
    )
}

export default Aside