import React, { Component } from 'react';
import {Card, CardTitle } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <div>
        <div className="iconSkillsTechnical">
      <Card shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/43xwS4ym/log-js.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  <Card shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/tCLjbfWq/html-5.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  
 
  <Card shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/7ZnwN9Jq/css3.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  </div>
  <div className="iconSkillsTechnical">
  <Card className="skillsTechnical"shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/VNP4z9K0/github.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  
 
  <Card className="skillsTechnical" shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/BQZg6Q5N/react.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  <Card className="skillsTechnical" shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/MZ0wwttV/firebase.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  </div>
  <div className="iconSkillsTechnical">
  
  
  <Card className="skillsTechnical" shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/0yyZj2vP/bootstrap-social-logo.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  <Card className="skillsTechnical" shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/mDfQYTvc/materialize.png) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
 
  <Card className="skillsTechnical" shadow={0} style={{width: '200px', height: '200px', background: 'url(https://i.postimg.cc/bNN1HCBR/Google-material-design.jpg) center / cover', margin: 'auto'}}>
      <CardTitle expand />
  </Card>
  </div>
  </div>

      
    )
  }
}

export default Skills;