import './education.css'
import '../../general.css'
import Qualifications from '../education_qual/qualifications'

const Education = (props)=>{
    return(
props.edu.map((edu)=>(
    <div className='edu-title'>
        <li>
            </li>
            <h3>{edu.title}</h3>
         <Qualifications key ={edu.class} data={edu.data2}/>
        </div>
   
   )) 
    )
}
export default Education