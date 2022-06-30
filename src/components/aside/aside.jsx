import Button1 from '../button1/button'
import './aside.css'
import '../../general.css'
import image from './20179009_img.jpg' 


const Aside = () => {
    return (
        <div className="asideWrapper font">
            <div className="profileimg">
               <img src="20179009_img.jpg" alt="profile_photo" />
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
               <a href='https://drive.google.com/file/d/1SBfnCqGqFPx3D3iz_8UWEtM94j3314BC/view?usp=sharing' rel="noreferrer" target="_blank">
                <Button1 title='Download CV'/> 
                </a> 
            </div>
        </div>
    )
}

export default Aside