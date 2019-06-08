import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ventura García</h2>
            <img
              src="https://i.postimg.cc/Df5sfLG0/2019-05-31-09-40-52-615.jpg"
              alt="foto"
              style={{height: '250px', borderRadius:'150px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'cursive', color:'#6A5F5D'}}>Creativa, innovadora y amigable. Me encanta la poesía, las matemáticas y mantener activo mi aprendizaje. Ingresé al mundo tech por curiosidad, y me fascinó. </p>
          </Cell>
          <Cell col={6}>
            <h2>Trabajemos juntos</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem >
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'cursive', color:'#6A5F5D'}} >
                  <img src="https://i.postimg.cc/htX31Sn8/whatsapp-3.png" alt="Whatsapp icono"/>
                    (044) 33 11 64 37 94
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'cursive', color:'#6A5F5D'}}>
                  <img src="https://i.postimg.cc/7L7sjmff/email-3.png" alt="Email icono" />
                    mateventura5@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent  className="social-icons">
                  <a href="https://www.linkedin.com/in/venturagarc%C3%ADa/" ><img src="https://i.postimg.cc/66D7pc39/linkedin-logo.png" alt="linkedin icono"
                  className="social-icons" /></a>
                   <a href="https://github.com/Ventuks26" ><img src="https://i.postimg.cc/VkhpxJgH/github-signo.png" alt="Github icono"
                  className="social-icons" /> </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;