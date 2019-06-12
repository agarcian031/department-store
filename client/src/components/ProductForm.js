import React, { Component } from 'react';
import axios from 'axios'; 
import {Form, Header} from 'semantic-ui-react'; 

export class ProductForm extends Component {
  defaultValues = {
    name: "",
    description: "", 
    price: "", 
  }

  state = {...this.defaultValues}



  handleSubmit = (e)=>{
    const id = this.props.match.params.department_id
    e.preventDefault()
    axios.post(`/api/departments/${id}/products`,{ ...this.state, })
      .then(res=>{
       this.props.history.push(`/departments/${id}`)
      })
    // TODO: Make api Post request
    this.setState({...this.defaultValues})
  }


  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  };

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">New Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline widths="equal">
          <Form.Input
           label="Name:"
           name="name"
           placeholder="Product Name"
           value={this.state.name}
           onChange={this.handleChange}
           required
           />
          <Form.Input
           label="Description:"
           name="description"
           placeholder="Description"
           value={this.state.description}
           onChange={this.handleChange}
           />
          <Form.Input
           label="Price:"
           name="price"
           placeholder="Price"
           value={this.state.price}
           onChange={this.handleChange}
           type="number"
           />
           </Form.Group>
          <Form.Button color="blue" fluid>Submit</Form.Button>
        </Form>
        
      </div>
    )
  }
}

export default ProductForm; 