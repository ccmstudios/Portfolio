import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Routes from './components/routes';
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
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
        <Content>
           
            <div className="page-content" />
            <Routes/>
        </Content>
    </Layout>
</div>

  );
}

export default App;