import React from 'react'
import { Link} from 'react-router-dom'
import { Header, Navigation, Drawer } from 'react-mdl'



const Routes =()=>
        (

<div>
<Header title="Title" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
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