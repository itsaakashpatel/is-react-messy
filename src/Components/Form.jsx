import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: {
          initialValue: "",
          message: "Please enter first name",
          eMessage: "Please enter first name, it's required field",
          isRequired: true,
        },
        lastName: {
          initialValue: "",
          message: "Please enter last name",
          eMessage: "Please enter last name, it's required field",
          isRequired: false,
        },
        email: {
          initialValue: "",
          message: "Please enter email",
          eMessage: "Please enter email, it's required field",
          isRequired: true,
        },
        password: {
          initialValue: "",
          message: "Please enter password",
          eMessage: "Please enter password, it's required field",
          isRequired: true,
        },
        cPassword: {
          initialValue: "",
          message: "Please enter password",
          eMessage: "Please enter password, it's required field",
          isRequired: true,
        },
      },
      errors: [],
    };

    //Binding the methods

    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  onSubmit() {}

  handleOnChange(event) {
    const field = event.currentTarget.getAttribute("name");
    if (field === "first-name") {
      this.setState({
        fields: {
          ...this.state.fields,
          firstName: {
            ...this.firstName,
            initialValue: event.currentTarget.value,
          },
        },
      });
    } else if (field === "last-name") {
      this.setState({
        fields: {
          ...this.state.fields,
          lastName: {
            ...this.lastName,
            initialValue: event.currentTarget.value,
          },
        },
      });
    }
    console.log("Form -> handleOnChange -> event", event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              value={this.state.fields.firstName.initialValue}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              value={this.state.fields.lastName.initialValue}
              onChange={this.handleOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
