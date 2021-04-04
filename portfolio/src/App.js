import './App.css';
import {Layout, Content } from 'react-mdl'
import './assets/css/portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/about';
import Contact from './pages/contact';
import Landing from './pages/landing';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Routes from './components/routes'

function App() {
  return (
    <Router>
      <Routes/>
    <div className="demo-big-content">
      <Switch>
      <Route exact path ='/' component ={Landing}/>
<Route exact path ='/resume' component ={Resume}/>
<Route exact path ='/projects' component = {Projects}/>
<Route exact path ='/about' component = {About}/>
<Route exact path = '/contact' component = {Contact}/>
    </Switch>
</div>
</Router>
  );
}

export default App;
