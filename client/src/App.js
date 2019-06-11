import React, {Fragment} from 'react';
import {Container} from 'semantic-ui-react'; 
import {Route, Switch} from 'react-router-dom';
import Home from './components/layout/Home';
import NoMatch from './components/layout/NoMatch'; 
import Navbar from './components/layout/Navbar'; 
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm'; 

const App = () => (
  <Fragment> 
    <Navbar/>
    <Container style={{padding: "20px 0"}}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/departments" component={Departments}/>
        <Route exact path="/departments/new" component={DepartmentForm}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
