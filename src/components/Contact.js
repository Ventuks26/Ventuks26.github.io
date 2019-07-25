import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body ">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h1>Ventura García</h1>
            <img
              src="https://i.postimg.cc/NjfCrd0s/ventur.jpg"
              alt="foto"
              className="imgContat"
            />
          </Cell>
          <Cell className="contact-box" col={6}>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: ".5em",
                fontFamily: "Lato",
                color: "#2d2928"
              }}
            >
              Me gustan los retos, desafiárdome a mi misma para aprender y
              crecer.{" "}
            </p>
            {/* <h4>
              Si estás interesado en trabajar juntos, no dudes en escribirme.
            </h4> */}
          </Cell>
        </Grid>

        <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent className="social-icons">
              <a className="contactMail" style={{ color: "#151415" }}>
                <i class="fas fa-envelope fa-lg" /> mateventura5@gmail.com
              </a>
                <a href="https://www.linkedin.com/in/venturagarc%C3%ADa/">
                  <i
                    class="fab fa-linkedin fa-3x"
                    style={{ color: "#151415" }}
                  />
                </a>
                <a href="https://github.com/Ventuks26">
                  <i class="fab fa-github fa-3x" style={{ color: "#151415" }} />
                </a>
              </ListItemContent>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}
export default Contact;
