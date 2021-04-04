import React from 'react'
import { Link} from 'react-router-dom'



const Routes =()=>
        (

<div>
<nav id='navbar' title="Nygel M. Porterfield">
            <Navigation>
                <ul>
                    <li><Link to="/"><h3>Home</h3></Link></li>
                    <li><Link to="/about"><h3>About</h3></Link></li>
                    <li><Link to="/resume"><h3>Resume</h3></Link></li>
                    <li><Link to="/projects"><h3>Projects</h3></Link></li>
                    <li><Link to="/contact"><h3>Contact</h3></Link></li>
                </ul>
                
                
                
                
                
            </Navigation>
        </nav>

</div>
        )





export default Routes;