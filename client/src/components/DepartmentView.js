import React, { Component } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { Button, Header, Segment, Divider, Icon } from "semantic-ui-react";
import DepartmentForm from './DepartmentForm'
export class DepartmentView extends Component {
  state = {
    department: {},
    editing: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}`).then((res) => {
      this.setState({ department: res.data });
    });
  }

  toggleEdit = () => {
    // will just take editing and give it the value of the opposite of what it currently is.
    this.setState({ editing: !this.state.editing });
  };

  updateState = (name) => {
    this.setState({
      department: {
        ...this.state.department,
        name: name,
      }
    });
  };

  render() {
    // const {name} = this.state.department
    const { products } = this.state;
    //*** pulling out the matched department ID from department params and passing it into a prop named department_id so that products has access to it.
    const { id } = this.props.match.params;
    return (
      <div>
        <Segment raised>
          {this.state.editing ? (
            <DepartmentForm toggleEdit={this.toggleEdit} department={this.state.department} updateState={this.updateState} />
          ) : (
            <Header as="h1" textAlign="center">
              {this.state.department.name}
            </Header>
          )}
          {/* <Button icon as={Link} to={`/departments/edit`}> */}
          <Button icon onClick={this.toggleEdit} size="tiny" circular>
            <Icon name="pencil" />
          </Button>
          <Divider />
          <ProductList department_id={id} />
          <br />
          <br />
          {/* FIXME  - Button goes back to form after item is created */}
          {/* FIXED  - used push instead of goBack */}
          <Button onClick={() => this.props.history.push("/departments")}>Back</Button>
        </Segment>
      </div>
    );
  }
}

export default DepartmentView;
