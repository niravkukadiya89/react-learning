import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class FormDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientData: {
        email: ""
      },
      AddressData: {
        address: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    let clientData = { ...this.state.clientData };
    clientData[event.target.name] = event.target.value;
    this.setState({ clientData });
  };
  handleChangeAdd = event => {
    let AddressData = { ...this.state.AddressData };
    this.clientData[event.target.name] = event.target.value;
    this.setState({ AddressData });
  };

  handleSubmit() {
    // event.preventDefault();
    debugger;
    console.log(this.state);
  }
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <Form method="POST" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">FirstName</Label>
            <Input
              type="text"
              name="FirstName"
              id="FirstName"
              value={this.state.clientData.FirstName}
              placeholder="with a placeholder"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="LastName"
              id="LastName"
              value={this.state.clientData.LastName}
              placeholder="with a placeholder"
              onChange={this.handleChange}
            />
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={this.state.clientData.email}
              placeholder="with a placeholder"
              onChange={this.handleChange}
            />
            <Label for="exampleText">Address</Label>
            <Input
              type="textarea"
              name="address"
              value={this.state.AddressData.address}
              id="exampleText"
              onChange={this.handleChangeAdd}
            />
            <Input
              type="text"
              name="city"
              value={this.state.AddressData.city}
              id="city"
              onChange={this.handleChangeAdd}
            />
            <Input
              type="textarea"
              name="country"
              value={this.state.AddressData.country}
              id="country"
              onChange={this.handleChangeAdd}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default FormDemo;
