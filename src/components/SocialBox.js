import React, { Component } from "react";
import '../style/StyleContact.css';

class SocialBox extends Component {
  render() {
    return (
      <div className="container-fluid contact-list">
        <div class="row between-xs">
          <div class="col-xs-4 ">
            <div class="box mail">
              <a
                href="mailto:mateventura5@gmail.com"
                className="contactMail"
                style={{ color: "#2d2928", fontSize: "1.5em" }}
              >
                <i class="fas fa-envelope fa-lg" />
              </a>
            </div>
          </div>
          <div class="col-xs-4">
            <div class="box">
              <a href="https://www.linkedin.com/in/venturagarc%C3%ADa/">
                <i
                  class="fab fa-linkedin fa-3x"
                  style={{ color: "#2d2928", fontSize: "2em" }}
                />
              </a>
            </div>
          </div>
          <div class="col-xs-4">
            <div class="box">
              <a href="https://github.com/Ventuks26">
                <i
                  class="fab fa-github fa-3x"
                  style={{ color: "#2d2928", fontSize: "2em" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialBox;
