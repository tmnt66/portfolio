import './projects.css'
import '../../components/Content/content.css'
import '../../general.css'
import ProjectCards from '../../components/projectCards/projectCards'
import dinoImage from './images/dinogamethumb.jpg'
import yoshiTH from './images/YoshiTH.png'
import cryptoImg from './images/cryptoImg.png'
import turgotImg from './images/turgotImg.png'
import tttImg from './images/ttt.png'
import raceCarImg from './images/raceCarImg.png'
import cc from './images/CC.png'


const Projects = (props) => {
    const data = [
        {
            id: 1,
            title: 'Crypo-App',
            imgUrl: cryptoImg,
            link:'https://branzils-cryptoapp.netlify.app/',
            description:'This a working Cryptocurrency website which shows various Cryptocurrencies , their data and News related to these Cryptocurrencies '
        },
        {
            id: 2,
            title: 'Turgot Clone',
            imgUrl: turgotImg,
            link:'https://poetic-dango-4e76db.netlify.app/',
            description:'Basic Template of a website , which includes forms templates,navbar etc.Resources used - HTML/CSS/ReactJs'
        },
        {
            id: 3,
            title: 'Yoshi Treasure hunt',
            imgUrl: yoshiTH,
            link:'https://base-game.netlify.app/',
            description:'Tic-Tac-Toe game , we can play and winner can be declared. Resources used - HTML/CSS'
        },
        {
            id: 4,
            title: 'Tic-Tac-Toe',
            imgUrl:tttImg,
            link:'https://stupendous-kashata-287a6c.netlify.app/',
            description:'Tic-Tac-Toe game , we can play and winner can be declared. Resources used - HTML/CSS'
        },
        {
            id: 5,
            title: 'Dinogame',
            imgUrl: dinoImage,
            link :'https://papaya-bienenstitch-c1977c.netlify.app/',
            description:"This is a Game like Chrome T Rex game.Player can move left right and jump. Resources used - HTML/CSS/JS"
        },
        {
            id: 6,
            title: 'Calculator',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link: 'https://vocal-croissant-e88bf8.netlify.app/',
            description:"Basic Calculator , which can perform basic Arithmatic operations. Resources used - HTML/CSS/JS"
        },
        {
            id: 7,
            title: 'Race Car Animation',
            imgUrl: raceCarImg,
            link:'https://resplendent-figolla-24a66c.netlify.app/',
            description:'Animation of a Car running on the Road.Resources used - HTML/CSS'
        },
        {
            id: 8,
            title: 'Clothing website',
            imgUrl: cc,
            link:'https://clothingproject.netlify.app/',
            description:'A E-commerce Clothing Website which includes Cart , add Items, signup and signout etc. Resources used - HTML/CSS/ReactJs'
        },
        {
            id: 9,
            title: 'Sticky Notes',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://bran-notes.netlify.app/',
            description:'A Simple Notes taking program where we can add , delete and refresh Notes. Resources used - HTML/CSS/JS'
        },
    ]
    return (
        <div className="projects contentWrapper font">
            <div className="intro">
                <h1 className='font'>My Projects</h1>
            </div>

            <div className="projectcards">
            {
                data.map((element) => (

                        <ProjectCards key ={element.id} data={element} />
                ))}
                    </div>

        </div>
    )


}

export default Projects