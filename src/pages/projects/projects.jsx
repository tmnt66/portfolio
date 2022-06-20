import './projects.css'
import '../../components/Content/content.css'
import '../../general.css'
import ProjectCards from '../../components/projectCards/projectCards'



const Projects = (props) => {
    const data = [
        {
            id: 1,
            title: 'project',
            imgUrl: 'https://i.stack.imgur.com/EivmQ.png'
        },
        {
            id: 1,
            title: 'project',
            imgUrl: 'https://i.stack.imgur.com/EivmQ.png'
        },
        {
            id: 1,
            title: 'project',
            imgUrl: 'https://i.stack.imgur.com/EivmQ.png'
        },
        {
            id: 1,
            title: 'project',
            imgUrl: 'https://i.stack.imgur.com/EivmQ.png'
        },
        {
            id: 1,
            title: 'project',
            imgUrl: 'https://i.stack.imgur.com/EivmQ.png'
        },
        {
            id: 1,
            title: 'project',
            imgUrl: 'https://i.stack.imgur.com/EivmQ.png'
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