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


  // FIXME - will delete the item and the product only if refreshed 
  const deleteDepartment = (id) => {
    // const id = props.match.params.department_id
    axios.delete(`/api/departments/${id}`)
    .then(res=>{
      // Error -> created a new departments array 
    //  setDepartments({ departments: departments.filter( dep => dep.id !== id)})
     setDepartments(departments.filter( dep => dep.id !== id))
    });
  }

 const renderDepartments = () => {
    if (departments.length <= 0)
      return <Header as="h3" textAlign="center">No Departments Listed</Header>
    return departments.map( department => (
      <Card color="blue" key={department.id}>
        <Card.Content>
          <Card.Header textAlign="center">{department.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button.Group size="tiny" fluid>
          <Button as={Link} to={`/departments/${department.id}`} color='blue' size="tiny">
            View
          </Button>
          <Button icon color="red" onClick={() => deleteDepartment(department.id)}>
            <Icon name="trash"/> Delete
          </Button>
          </Button.Group>
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