import React,  {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.postimg.cc/Df5sfLG0/2019-05-31-09-40-52-615.jpg"
              alt="foto"
              className="foto-img"
              />

            <div className="banner-text">
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'cursive', color:'#6A5F5D', fontSize:"20px"}}>
              Soy Ventura Front-End Developer egresada de Laboratoria. 
               Me considero una persona creativa, innovadora y amigable. Me encanta la poesía, 
               las matemáticas, trabajar en equipo  y mantener activo mi aprendizaje.
               Ingresé al mundo tech por curiosidad, y me fascinó.

              </p>
              <h1>Front-End Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Github/git | NodeJS | Firebase  </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/venturagarc%C3%ADa/" ><img src="https://i.postimg.cc/66D7pc39/linkedin-logo.png" alt="linkedin icono"
                  />
            
          </a>

          {/* Github */}
          <a href="https://github.com/Ventuks26" ><img src="https://i.postimg.cc/VkhpxJgH/github-signo.png" alt="Github icono"
                  />
            
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