import Aside from "../components/aside/aside"
import Content from "../components/Content/content"
import { Routes } from "react-router"
import './homepage.css'
import Navbar from "../components/navbar/navbar"
import { Route } from "react-router"
import Projects from './projects/projects'
import Message from "./message/message"
import '../general.css'
const Homepage = () => {
    return (
        <div className="homepage">

            <div className="aside">
                <Aside />
            </div>
            <div className="content"> 
                {/* <div className="navbar "> */}
                    <Navbar />
                {/* <Content /> */}
                
<Routes>
                {/* </div> */}
              <Route path="/" element = { <Content />}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Message/>}/>
</Routes>
            </div>
        </div>
    )
}

export default Homepage