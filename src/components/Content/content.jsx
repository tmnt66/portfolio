import './content.css'
import '../../general.css'
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
                Year: '2012 - 2016',
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
                <Button1 title='Message Me' />
            </div>
            <div className="professionalInfo">
                <div className="education">
                    <h1>Education</h1>
                    <Education edu={data.forEdu} />
                </div>
                <div className="education">
                    <h1>Interests</h1>

                </div>


            </div>
        </div>

    )
}

export default Content