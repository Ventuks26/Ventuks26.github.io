import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid className="resume"> 
          
            

            
          <Cell className="resume-right-col" col={8}>
            
              <hr style={{borderTop: '3px solid gray'}} />
              <h2>Habilidades Técnicas</h2>
              <Skills
                skill="JavaScript ES6"
                progress={100}
                />
                <Skills
                  skill="HTML"
                  progress={80}
                  />
                  <Skills
                  skill="CSS3"
                  progress={80}
                  />
                  <Skills
                  skill="Git"
                  progress={80}
                  />
                  <Skills
                  skill="Firebase"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React.js"
                      progress={30}
                      /> 
                      <Skills
                      skill="React native"
                      progress={30}
                      /> 
</Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;