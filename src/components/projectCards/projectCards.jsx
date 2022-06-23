import './projectCards.css'


const ProjectCards = (props) => {
    return (
        <div className="projectcard">
            <a href={props.data.link}>
                <p className="resource">{props.data.resource}</p>
                <img src={props.data.imgUrl} alt={props.data.title} />
                <h4>{props.data.title}</h4>
                <div className="overlay">
                    <h3>{props.data.title}</h3>
                    <div className="text">{props.data.description}</div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCards