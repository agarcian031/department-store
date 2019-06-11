import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios'; 
import {Card, Header, Divider, Button, Icon} from 'semantic-ui-react';

const Departments = (props) => {
  const [departments, setDepartments] = useState([]); 


  useEffect( () => { 
    axios.get("/api/departments")
    .then( res => {
      setDepartments(res.data);
    });
  }, []); 


 const renderDepartments = () => {
    if (departments.length <= 0)
      return <Header as="h3" textAlign="center">No Departments Listed</Header>
    return departments.map( department => (
      <Card color="blue" key={department.id}>
        <Card.Content>
          <Card.Header textAlign="center">{department.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue' fluid size="tiny">
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }


  return (
    <div>
      <Header as="h1" textAlign="center">Departments</Header>
      <Divider/>
      <br/>
      <Button as={Link} to="/departments/new" icon size="tiny" color="blue"> 
        <Icon name="plus"/>Add Departments
      </Button>
      <br/>
      <br/>
      <Card.Group>
        {renderDepartments()}
      </Card.Group>
    </div>
  )
}

export default Departments; 