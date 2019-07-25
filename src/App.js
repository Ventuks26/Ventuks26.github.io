import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  hideToggle() {
    let selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "#FBECEA",
                  fontFamily: "Playfair Display"
                }}
                to="/"
              >
                Ventura García
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/">Acerca de mí</Link>
              <Link to="/skills">Habilidades</Link>
              <Link to="/projects">Proyectos</Link>
              <Link to="/contact">Contacto</Link>
            </Navigation>
          </Header>
          <Drawer
            className="drawer-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "#EAAAA0",
                  fontFamily: "Italiana"
                }}
                to="/"
              >
                Ventura García
              </Link>
            }
          >
            <Navigation>
              <Link to="/" onClick={() => this.hideToggle()}>
                Acerca de mí
              </Link>
              <Link to="/skills" onClick={() => this.hideToggle()}>
                Habilidades
              </Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>
                Proyectos
              </Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>
                Contacto
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />

            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
