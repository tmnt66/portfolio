import './projectCards.css'


const ProjectCards = (props)=>{
    return(
        <div className="projectcard">
        <a href={props.data.link}>

            <img src={props.data.imgUrl} alt={props.data.title} />
            <h4>{props.data.title}</h4>
        </a>
        </div>
    )
}

export default ProjectCards