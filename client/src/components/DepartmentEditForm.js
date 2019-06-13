import React, { Component } from 'react';
import axios from 'axios'; 
import {Form, Header} from 'semantic-ui-react'; 

export class DepartmentForm extends Component {
  defaultValues = {
    name: "",
  }

  state = {...this.defaultValues}

  //   editProduct = (product_id, name, description, price) => {
//     const { id } = this.props.match.params;
//     axios.put(`/api/departments/${id}/products/${product_id}`, { product_id, name, description, price })
//         .then(res => {
//             const products = this.state.products.map(p => {
//                 if (p.id === product_id)
//                     return res.data;
//                 return p;
//             });
//             this.setState({
//                 products,
//                 editing: false
//             })
//         })
// }

  handleSubmit = (e) => {
    e.preventDefault(); 
    debugger
    // axios.post("/api/departments", {...this.state,})
    // .then(res => {
    //   this.props.history.push("/departments")
    // })
    // this.setState({...this.defaultValues, });
  };


  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  };

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">New Department</Header>
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