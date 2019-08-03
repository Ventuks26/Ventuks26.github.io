import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
 
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            className="project"
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginTop: ".5em" }}
          >
            <CardTitle
              style={{
                color: "#black",
                height: "176px",
                background:
                  "url(https://i.postimg.cc/15z8WT2Z/Explora-M-xico.png) center / cover"
              }}
            >
              
            </CardTitle>
            <CardText style={{ fontWeight:"blond", color:"#2d2928"}}>Explora México</CardText>
            <CardActions border>
              <Button href="https://github.com/Ventuks26/GDL002-social-network" colored>GitHub</Button>
              <Button href="https://lizgarciac.github.io/GDL002-social-network/src/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card
            className="project"
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginTop: ".5em" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://i.postimg.cc/fypCy0JZ/tic-tac-toe.png) center / cover"
              }}
            >
             
            </CardTitle>
            <CardText style={{ fontWeight:"blond", color:"#2d2928"}}>Tic-Tac-Toe
              </CardText>
            <CardActions border>
              <Button href="https://github.com/Ventuks26/GDL002-mobile-game/tree/Develop"  colored>GitHub</Button>
              <Button href="https://exp.host/@ventura5/expo-template-blank"  colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
            
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card
            className="project"
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginTop: ".5em" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://i.postimg.cc/Vv2V0hdJ/Beats-box.png) center / cover"
              }}
            >
              
            </CardTitle>
            <CardText style={{ fontWeight:"blond", color:"#2d2928"}}>Beats-Box</CardText>
            <CardActions border>
              <Button href="https://github.com/Ventuks26/Beats-Box" colored>GitHub</Button>
              <Button  href="https://ventuks26.github.io/Beats-Box/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Mi proyectos</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
