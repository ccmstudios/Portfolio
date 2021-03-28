import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import About from '../pages/about';
import Contact from '../pages/contact';
import Landing from '../pages/landing';
import Projects from '../pages/projects';
import Resume from '../pages/resume';


class  Routes extends React.Component{
    render(){
        return(

    <Router>
<div>
<Switch>
<Route exact path ='/' component ={Landing}/>
<Route exact path ='/resume' component ={Resume}/>
<Route exact path ='/projects' component = {Projects}/>
<Route exact path ='/about' component = {About}/>
<Route exact path = '/contact' component = {Contact}/>
</Switch>

</div>
</Router>
        )
    }
}





export default Routes;