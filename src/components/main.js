import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landingpage from './Landingpage';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';


const Main =() =>(
   
<Switch>
    <Route path="/" exact component={Landingpage} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
</Switch>

)
export default Main;