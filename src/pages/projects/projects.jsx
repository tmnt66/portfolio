import './projects.css'
import '../../components/Content/content.css'
import '../../general.css'
import ProjectCards from '../../components/projectCards/projectCards'



const Projects = (props) => {
    const data = [
        {
            id: 1,
            title: 'Dinogame',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link :'https://papaya-bienenstitch-c1977c.netlify.app/',
            description:"This is a Game like Chrome T Rex game.Player can move left right and jump. Resources used - HTML/CSS/JS"
        },
        {
            id: 2,
            title: 'Calculator',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link: 'https://vocal-croissant-e88bf8.netlify.app/',
            description:"Basic Calculator , which can perform basic Arithmatic operations. Resources used - HTML/CSS/JS"
        },
        {
            id: 3,
            title: 'Turgot Clone',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://poetic-dango-4e76db.netlify.app/',
            description:'Basic Template of a website , which includes forms templates,navbar etc.Resources used - HTML/CSS/ReactJs'
        },
        {
            id: 4,
            title: 'Race Car Animation',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://resplendent-figolla-24a66c.netlify.app/',
            description:'Animation of a Car running on the Road.Resources used - HTML/CSS'
        },
        {
            id: 5,
            title: 'tictac',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://stupendous-kashata-287a6c.netlify.app/',
            description:'Tic-Tac-Toe game , we can play and winner can be declared. Resources used - HTML/CSS'
        },
        {
            id: 6,
            title: 'Clothing website',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://clothingproject.netlify.app/',
            description:'A E-commerce Clothing Website which includes Cart , add Items, signup and signout etc. Resources used - HTML/CSS/ReactJs'
        },
        {
            id: 7,
            title: 'Crypo-App',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://branzil-cryptoapp.netlify.app/',
            description:'This a working Cryptocurrency website which shows various Cryptocurrencies , their data and News related to these Cryptocurrencies '
        }
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