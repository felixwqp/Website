import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
<Layout>
    <Header className="header-color" title="Felix Wang" scroll>
        <Navigation>
            <Link to="/">Felix</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/aboutme">About Me</Link>
        </Navigation>
    </Header>
    <Drawer title="Hello from Felix">
        <Navigation>
            <Link to="/">Felix</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/aboutme">About Me</Link> 
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content" />

        <Main/>

    </Content>
</Layout>
</div>
    </div>
  );
}

export default App;
