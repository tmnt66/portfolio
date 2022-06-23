import './message.css'
import Button1 from '../../components/button1/button.jsx'
import '../../general.css'
const Message  = (props)=>{ 
    return(
     <div className="message font">
        <h1>Fill Your Contact Details</h1>
              <div className="name1">
                <input placeholder=" Company Name" type="text" />
                <input placeholder=" Job Profile" type="text" />
            </div>
            <input placeholder=" Company Location" type="text" />
            <input placeholder=" Contact Number" type="text" />
            <input placeholder=" E-mail" type="text" />
            <textarea placeholder=" Job Specification" />
            <Button1 title='Submit'/>
     </div>  
    )
}

export default Message