import React from 'react'
import { Link} from 'react-router-dom'
import { Header, Navigation, Drawer } from 'react-mdl'



const Routes =()=>
        (

<div>
<Header id='navbar' title="Nygel M. Porterfield" scroll>
            <Navigation>
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/about"><h3>About</h3></Link>
                <Link to="/resume"><h3>Resume</h3></Link>
                <Link to="/projects"><h3>Projects</h3></Link>
                <Link to="/contact"><h3>Contact</h3></Link>
            </Navigation>
        </Header>
            <Drawer title="Title">
            <Navigation>
            <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>

</div>
        )





export default Routes;