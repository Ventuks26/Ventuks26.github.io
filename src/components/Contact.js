import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import SocialBox from "./SocialBox";
import '../style/StyleContact.css';

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
              style={{
                width: "15em",
                height: "15em"
              }}
            />
          </Cell>
          <Cell className="contact-box" col={6}>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "2em",
                fontFamily: "Lato",
                color: "#2d2928"
              }}
            >
              Me gustan los retos, desafiárdome a mi misma para aprender y
              crecer.
              

            </p>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: ".5em",
                fontFamily: "Lato",
                color: "#2d2928"
              }}
            >
              Me considero una persona empatica, perseverante, resolutiva, que ha desarrollado
               su habilidad de autoaprendizaje, 
              capaz de adaptarse a cualquier reto o circuntancia.
            </p>
          </Cell>
          
        </Grid>

        <div>
          
          <SocialBox />
        </div>
      </div>
    );
  }
}
export default Contact;
