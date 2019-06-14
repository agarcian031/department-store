import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios'; 
import {Card, Header, Divider, Button, Icon} from 'semantic-ui-react';
import HeaderText from "./styles/HeaderText";
import styled from 'styled-components';


const Departments = (props) => {
  const [departments, setDepartments] = useState([]); 
  // const [editing, setEditing] = useState([false]); 


  useEffect( () => { 
    axios.get("/api/departments")
    .then( res => {
      setDepartments(res.data);
    });
  }, []); 


  // FIXME - will delete the item and the product only if refreshed 
  // FIXED = passing in id in `` caused the id to be read as a string
  const deleteDepartment = (id) => {
    // const id = props.match.params.department_id
    axios.delete(`/api/departments/${id}`)
    .then(res=>{
      // Error -> created a new departments array 
    //  setDepartments({ departments: departments.filter( dep => dep.id !== id)})
     setDepartments(departments.filter( dep => dep.id !== id))
    });
  }

  // const toggleEdit = () => {
  //   setEditing(!editing)
  //   console.log({editing}); 
  // }





 const renderDepartments = () => {
    if (departments.length <= 0)
      return <Header as="h3" textAlign="center">No Departments Listed</Header>
    return departments.map( department => (
      <Card color="blue" key={department.id}>
        <Card.Content>
          <HeaderText textAlign="center">{department.name}</HeaderText>
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
    <DepartmentContainer>
      <HeaderText as="h1" textAlign="center">Departments</HeaderText>
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
    </DepartmentContainer>
  )
}

const DepartmentContainer = styled.div`
  background: whitesmoke; 
`;



export default Departments; 