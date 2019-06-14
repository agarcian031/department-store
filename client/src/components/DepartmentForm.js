import React, { Component } from 'react';
import axios from 'axios'; 
import {Form, Header} from 'semantic-ui-react'; 

export class DepartmentForm extends Component {
  defaultValues = {
    name: "",
  }

  state = {...this.defaultValues}


  componentDidMount = () => {
    if (this.props.department) {
      this.setState({
        name: this.props.department.name,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    const {department} = {...this.state}; 
    if (this.props.department) {
      axios.put(`/api/departments/${this.props.department.id}`, department)
      this.props.toggleEdit(); 
      this.props.updateState(this.state.name)
    } else {
      axios.post("/api/departments", {...this.state,})
      .then(res => {
        this.props.history.push("/departments")
      })
      this.setState({...this.defaultValues, });
    }
  };


  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  };

  render() {
    const {name} = this.state
    return (
      <div>
        {
          this.props.toggleEdit ? 
          <Header as="h1" textAlign="center">Edit Department</Header>
          :
          <Header as="h1" textAlign="center">New Department</Header>
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
           label="Department Name:"
           name="name"
           placeholder="Department Name"
           value={this.state.name}
           onChange={this.handleChange}
           required
           />
          <Form.Button color="blue" fluid>Submit</Form.Button>
        </Form>
        
      </div>
    )
  }
}

export default DepartmentForm
