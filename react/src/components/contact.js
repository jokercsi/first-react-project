import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component{
    render() {
      return (
        <div className = "contact-body">
          <Grid className = "contact-grid">
           
             <Cell col={6}>
              <h2>Jibin Kim</h2>
              <img src ="https://i.stack.imgur.com/4uzaF.png" alt="profile" style={{height: '250px'}} 
              />
              <p style ={{ width: '75%', margin: 'auto', paddingTop:'1em'}}>
              Hello World
              </p>
            </Cell>
            
            <Cell className="contact-right-col" col={6}>
            <h2>Contact</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style ={{fontSize: '20px', fontFamily: 'Anton'}}>
                     <i className="fa fa-phone-square" aria-hidden="true"></i>
                     (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style ={{fontSize: '20px', fontFamily: 'Anton'}}>
                     <i className="fa fa-address-book" aria-hidden="true"></i>
                     hacker way menlo park
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style ={{fontSize: '20px', fontFamily: 'Anton'}}>
                     <i className="fa fa-envelope" aria-hidden="true"></i>
                     jokercsi@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
            </Cell>
            
          </Grid>
        </div>
      );
    }
  }

export default Contact;