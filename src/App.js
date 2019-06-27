import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';



function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: '#EAAAA0',  fontFamily: "cursive"}} to="/">Ventura García</Link>}  scroll>
            <Navigation>
            <Link to="/">Acerca de mí</Link>           
            <Link to="/resume">Habilidades</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
            </Navigation>
        </Header>
        <Drawer  className="drawer-color"  title={<Link style={{textDecoration: 'none', color: '#EAAAA0',  fontFamily: "cursive"}} to="/">Ventura García</Link>}>
            <Navigation>
            <Link to="/">Acerca de mí</Link>           
            <Link to="/resume">Habilidades</Link>          
            <Link to="/projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
