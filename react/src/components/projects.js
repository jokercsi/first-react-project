import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0};

  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project 1</CardTitle>
          <CardText>
            My Portfolio
          </CardText>
          <CardActions border>
            <Button colored>
              This Site
            </Button>
            <Button colored>
            <a href = "https://github.com/jokercsi">Github</a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#black'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        
      )
    }
     else if(this.state.activeTab === 1){
      return(
        <div><h1>This is jquery</h1></div>  
      )   
    }

  }


    render() {
      return (
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTeb} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>jquery</Tab>
            <Tab></Tab>
          </Tabs>

          <section className="projects-grid">
            <Grid className="projects-grid">
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      );
    }
  }

export default Projects;