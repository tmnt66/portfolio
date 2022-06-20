import './projectCards.css'


const ProjectCards = (props)=>{
    return(
        <div className="projectcard">
            <img src={props.data.imgUrl} alt={props.data.title} />
            <h4>{props.data.title}</h4>
        </div>
    )
}

export default ProjectCards