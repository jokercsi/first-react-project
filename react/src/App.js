import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from "./components/main";
import {Link} from 'react-router-dom'

class Navbar extends Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    
    render() {
        return (
            <Drawer title="JibinPortfolio">
                <Navigation>
                    <Link to={"/landingpage"} onClick={() => this.hideToggle()}>AboutMe</Link>
                    <Link to={"/resume"} onClick={() => this.hideToggle()}>Resume</Link>
                    <Link to={"/projects"} onClick={() => this.hideToggle()}>Projects</Link>
                    <Link to={"/contact"} onClick={() => this.hideToggle()}>Contact</Link>
                    <Link to={"/customers"} onClick={() => this.hideToggle()}>Customers</Link>
                </Navigation>
            </Drawer>
        );
    }
}
   

class App extends Component{
  render() {
    return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title ={<Link style={{textDecoration: 'none', color: 'white'}} 
            to= "/">JibinPortfolio</Link>} scroll>
                <Navigation>
                    <Link to="/landingpage">AboutMe</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/customers">Customers</Link>

                </Navigation>
            </Header>
            <Navbar>
            </Navbar>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;