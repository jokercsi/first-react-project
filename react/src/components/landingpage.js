import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import jibin from '../images/jibin.jpg';
import Typical from 'react-typical';


class Landing extends Component{
    render() {
      return (
        <div style ={{width: '100%', margin: 'auto'}}>
		    <Grid className="landing-grid">
		        <Cell col={12}>
					<img src = {jibin} className = "profile-img"/>
		        	<div className = "banner-text">
						<h1>Jibin Kim</h1>
						<p>I'm{' '}
						<Typical 
							loop={Infinity}
							wrapper="b"
							steps={[
								'a Developer💻',2000,
								'a AGU Student🧑‍🎓',2000,
								'a Soccer Player',2000,
								'Iron Man', 2000,
								'Legend', 2000
							]}        
						/>
		        	    </p>
						<hr/>

		        		<p className="coding">HTML/CSS | JavaScript | React | MySQL | C/C# | Java | Python | Git</p>
					
						<div className="social-links">
							{ /*Github*/ }
							<a href ="https://github.com/jokercsi" rel="noopener noreferrer" target = "_blank">
								<i className="fa fa-github-square" aria-hidden="true"></i>
							</a>	

							{ /*Facebook*/ }
							<a href ="https://www.facebook.com/jibin.kim.7" rel="noopener noreferrer" target = "_blank">
								<i className ="fa fa-facebook-square" aria-hidden="true"></i>
							</a>

							{ /*instagrm*/ }
							<a href ="https://www.instagram.com/jokercsi/" rel="noopener noreferrer" target = "_blank">
								<i className ="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</div>
		        	</div>
		        </Cell>
		    </Grid>
        </div>
      );
    }
  }

export default Landing;