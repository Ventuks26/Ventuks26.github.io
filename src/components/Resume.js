import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import Education from './education';
// import Experience from './experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          
            

            
          <Cell className="resume-right-col" col={8}>
            
              <hr style={{borderTop: '3px solid gray'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;