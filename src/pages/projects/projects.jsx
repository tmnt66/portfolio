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
            link :'https://papaya-bienenstitch-c1977c.netlify.app/'
        },
        {
            id: 2,
            title: 'Calculator',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link: 'https://vocal-croissant-e88bf8.netlify.app/'
        },
        {
            id: 3,
            title: 'Turgot Clone',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://poetic-dango-4e76db.netlify.app/'
        },
        {
            id: 4,
            title: 'Race Car Animation',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://resplendent-figolla-24a66c.netlify.app/'
        },
        {
            id: 5,
            title: 'tictac',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU',
            link:'https://stupendous-kashata-287a6c.netlify.app/'
        },
        {
            id: 6,
            title: 'Clothing website',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh5CERjJrSmE0u_GLTRNtORoWxBm7LfBLLA&usqp=CAU'
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