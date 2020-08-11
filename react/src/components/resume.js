import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class Resume extends Component{
    render() {
      return (
        <div>
          <Grid>

            <Cell col ={4}>
              <div style = {{textAlign: 'center'}}>
                <img src="https://i.stack.imgur.com/4uzaF.png" alt="profile" style={{height: '200px'}}></img>
              </div>

              <h2 style={{paddingTop: '2em'}}>Jibin Kim</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
              <p>
                Hello World!
              </p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
              <h5>Address</h5>
              <p>hacker way menlo park ca 94025 usa</p>
              <h5>Phone</h5>
              <p>(123) 456-7890</p>
              <h5>Email</h5>
              <p>jokercsi@gmail.com</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>


            </Cell>

            <Cell className="resume-right-col" col ={8}>
              <h2>Education</h2>
              <Education
                startYear={2017}
                endYear={2023}
                schoolName="Aoyama Gakuinn University"
                schoolDepartment ="(Department of Integrated Information Technology)"
                schoolDescription="Aoyama Gakuin University (Japanese: 青山学院大学, Hepburn: Aoyama Gakuin Daigaku, AGU) is a private university in Shibuya, Tokyo, Japan. Originally established in 1874 by missionaries from the Methodist Episcopal Church, it was reconfigured in its current form in 1949 as part of Aoyama Gakuin. Aoyama Gakuin University celebrated its 140-year anniversary in 2014 and is one of Japan's oldest higher education facilities."
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress ="70"
              />
              <Skills
                skill="JavaScript"
                progress ="50"
              />
              <Skills
                skill="React"
                progress ="30"
              />
              <Skills
              skill="MySQL"
              progress ="30"
              />
              <Skills
              skill="C/C#"
              progress ="70"
              />
              <Skills
              skill="Java"
              progress ="40"
              />
              <Skills
              skill="Python"
              progress ="30"
              />
              
            </Cell>



          </Grid>
        </div>
      );
    }
  }

export default Resume;