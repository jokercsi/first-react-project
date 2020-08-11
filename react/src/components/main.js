import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import Customers from './customers';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/landingpage" component={Landing} />	
		<Route path="/contact" component={Contact} />	
		<Route path="/resume" component={Resume} />	
		<Route path="/projects" component={Projects} />	
		<Route path="/customers" component={Customers} />	
	</Switch>
)

export default Main;