import Aside from "../components/aside/aside"
import Content from "../components/Content/content"
import './homepage.css'
import Navbar from "../components/navbar/navbar"

const Homepage = ()=>{
    return(
        <div className="homepage">
        
            <div className="aside">
                <Aside/>
            </div>
            <div className="content">
            <div className="navbar ">
                <Navbar/>
                </div>
                <Content/>
            </div>
        </div>
    )
}

export default Homepage