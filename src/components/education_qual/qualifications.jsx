import './qualifications.css'


const Qualifications = (props)=>{
    return(
        <div className="qualification" >
          <p> Stream :{props.data.Stream}</p>
          <p> College :{props.data.College}</p>
          <p> Percentage :{props.data.Percentage}</p>
          <p> Year :{props.data.Year}</p>
        </div>
    )
}
export default Qualifications