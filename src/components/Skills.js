import React, { Component } from "react";
// import { Card, CardTitle } from "react-mdl";
import "../style/StyleSkills.css";

class Skills extends Component {
    render() {
        return (
          <div className="container-fluid technicalSkills">
            <div className="row">
              <div className="col">
    
                <div>
                  <h3 className="titlePages center-align titleTech">HABILIDADES TÉCNICAS</h3>
                </div>
    
                <div className=" technicalBox">
                  <div className="row center-xs">
                    <div class="col s6 boxTech">
                    <i class="fab fa-js fa-9x iconTechnical" title="JavaScript ES6"></i>
                    </div>
                    <div class="col s6">
                    <i class="fab fa-html5 fa-9x iconTechnical" title="HTML5"></i>
                    </div>
                  </div>
    
    
                  <div className="row center-xs">
                    <div class="col s6">
                    <i class="fab fa-css3-alt fa-9x iconTechnical" title="CSS3"></i>
                    </div>
                    <div class="col s6">
                    <i class="fab fa-github fa-9x iconTechnical" title="Github"></i>
                    </div>
                  </div>
                </div>
    
                <div className="row center-xs">
                  <div class="col s6">
                  <i class="fab fa-react fa-9x iconTechnical" title="React"></i>
                  </div>
                  <div class="col s6">
                  <i class="fab fa-bootstrap fa-9x iconTechnical" title="Bootstrap"></i>
                  </div>
                </div>

                
              
    
              </div>
            </div>
          </div>
        )
      }
    }

export default Skills;
