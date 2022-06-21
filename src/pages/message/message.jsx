import './message.css'
import Button1 from '../../components/button1/button.jsx'

const Message  = (props)=>{ 
    return(
     <div className="message">
              <div className="name1">
                <input placeholder="Enter your firstname" type="text" />
                <input placeholder="Enter your lastname" type="text" />
            </div>
            <input placeholder="Enter your Number" type="text" />
            <input placeholder="Enter your E-mail" type="text" />
            <input placeholder="Enter your Company Name" type="text" />
            <textarea placeholder="Enter your Specification" />
            <Button1 title='Submit'/>
     </div>  
    )
}

export default Message