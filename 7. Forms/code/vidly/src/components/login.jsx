import React, { Component } from "react";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    // return{username:"username is required"}

    //object
    const errors = {};

    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "username is required";
    if (account.password.trim() === "")
      errors.password = "password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // username = React.createRef()
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors : errors || {} });
    if (errors) return;

    console.log("submit");

    // const username = this.username.current.value;

    // console.log("chck"+username)
  };
  validateProperty=({name,value})=>{
    if(name === "username"){
      if(value.trim() === "" ) return "username is required";
    }
    if(name === "password"){
      if(value.trim() === "" ) return "password is required";
    }
  
  }
  handleChange = ({ currentTarget: input }) => {

const errors = {...this.state.errors}
const errorMessage = this.validateProperty(input);
if(errorMessage) errors[input.name] = errorMessage;
 else delete errors[input.name]



    const account = { ...this.state.account };
    // account[e.currentTarget.name] = e.currentTarget.value;
    account[input.name] = input.value;

    this.setState({ account ,errors });
    console.log(account);
  };
  render() {
    const { account ,errors } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          {/* <div className="form-group">
        <label htmlFor="username">Username</label>
        <input ref={this.username} value={username} name="username" type="text" autoFocus className="form-control" id="username" placeholder="Username" onChange={this.handleChange} />
    </div>
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" value={password} name="password"  onChange={this.handleChange} className="form-control" id="password" placeholder="Password" />
    </div>  */}

          <button className="btn btn-primary">Log in</button>
        </form>
      </>
    );
  }
}

export default Login;
