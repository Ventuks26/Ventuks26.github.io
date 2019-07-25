import React,  {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.postimg.cc/NjfCrd0s/ventur.jpg"
              alt="foto"
              className="foto-img"
              />
             

            <div className="banner-text">
            <h1 className="frontEnd">Front-End Developer</h1>
              <p className="textAboutMe">
              Soy Ventura Front-End Developer egresada de Laboratoria. 
               Me considero una persona creativa, innovadora y amigable. Me encanta la poesía, 
               las matemáticas, trabajar en equipo  y mantener activo mi aprendizaje.
               Ingresé al mundo tech por curiosidad, y me fascinó.

              </p>
              

            <hr/>

          <p className="tech">HTML/CSS | Bootstrap | JavaScript | React | Github/git | NodeJS | Firebase  </p>

        <div className="social-links">

      
        <a href="https://www.linkedin.com/in/venturagarc%C3%ADa/">
                    <i class="fab fa-linkedin fa-3x" style={{color:'#151415'}}></i>
                    </a>

         
          <a  href="https://github.com/Ventuks26">
                    <i class="fab fa-github fa-3x" style={{color:'#151415'}}></i>
                    </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;