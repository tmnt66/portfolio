import '../../general.css'
import './content.css'
import Button1 from '../button1/button'
import Education from '../education/education'
const Content = () => {

    let data = {

        forEdu: [{

            title: 'Bachelor of Technology',
            class: 'Btech',
            data2: {
                Degree: 'Bachelor of Technology',
                Stream: 'Chemical Engineering',
                College: 'Motilal Nehru National Institute of Technology Allahabad',
                Year: '2017 - 2021',
                Percentage: '88.4'
            }
        },
        {
            id: 2,
            class: 'Inter',
            title: 'Intermediate',
            data2: {
                Degree: 'Intermediate',
                Stream: 'PCM',
                College: 'Padmawati Academy Bareilly',
                Year: '2014 - 2016',
                Percentage: '79.2'
            }
        },
        {
            id: 3,
            class: 'Tenth',
            title: 'High School',
            data2: {
                Degree: 'High School',
                Stream: 'Science',
                College: 'St. Thomas High School , Nawabganj',
                Year: '2012 - 2014',
                Percentage: '89.3'
            }
        }],
        forInterest: [{
            id: 1,
            title: 'btech',
        },
        {
            id: 2,
            title: 'btech',
        },
        {
            id: 3,
            title: 'btech',
        }]


    }
    return (
        <div className="contentWrapper font">
            <div className="intro">
                <h1 className='font'>Hi, I am Branzil</h1>
                <div> I am a Coding enthusiast , who loves Web Development and competitive coding</div>
                <Button1 title='HTML'/>
                <Button1 title='CSS'/>
                <Button1 title='JAVASCRIPT'/>
                <Button1 title='REACT JS'/>
            </div>
            <div className="professionalInfo">
                <div className="education">
                    <h1>Education</h1>
                    <Education edu={data.forEdu} />
                </div>
                <div className="education">
                    <h1>Projects</h1>
                    <div className="project1">
                        <h3>1.Turgot USA clone </h3>
                        <p>Resources Used : HTML/CSS/Javascript/ReactJs</p>
                        <p>This is a simple website template , with working navbar links using React-router </p>
                        <h3>2. CryptoApp </h3>
                        <p>Resources Used : HTML/CSS/Javascript/ReactJs/Redux/RapidAPI</p>
                        <p>This a working Cryptocurrency website which shows various Cryptocurrencies , their data and News related to these Cryptocurrencies </p>
                    </div>
                    <div className="project2">
                        <h3>2.MINI Projects </h3>
                        <h5>Tic-Tac-Toe </h5>
                        <p>Resources Used : HTML/CSS/Javascript</p>
                        <p>The Game includes two player mode with Winner Declaration and Reset button functionality </p>
                        <h5>Dinosaur Game </h5>
                        <p>Resources Used : HTML/CSS/Javascript</p>
                        <p>This is a T-rex Chrome type game, which includes 2D player movement in Horizontal direction and Jumping.Game also includes score point table and difficulty increases as game proceeds.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content