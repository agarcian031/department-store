import React, { Component } from 'react'
import axios from 'axios'
import ProductList from './ProductList'
import {Button, Header, Segment, Divider} from 'semantic-ui-react'

export class DepartmentView extends Component {
  state = {
    department: {}, 
  }
  
  componentDidMount() {
    const {id} = this.props.match.params; 
    axios.get(`/api/departments/${id}`)
    .then( res => {
      this.setState({ department: res.data, })
    })
  }
  
  
  
  render() {
    // const {name} = this.state.department 
      const {products} = this.state 
      //*** pulling out the matched department ID from department params and passing it into a prop named department_id so that products has access to it. 
      const {id} = this.props.match.params
    return (
      <div>
        <Segment raised>
          <Header as="h1">{this.state.department.name}</Header>
          <Divider/>
          <ProductList department_id={id}/>
          <br/>
          <br/>
          <Button onClick={this.props.history.goBack}>Back</Button>
        </Segment>
      </div>
    )
  }
}

export default DepartmentView
