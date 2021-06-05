import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onHandleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <span style={{ color: "#ffdf6c", textAlign: "center" }}>
          Sign in with email and password
        </span>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            name="email"
            type="email"
            label="email"
            onHandleChange={this.onHandleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            onHandleChange={this.onHandleChange}
            value={this.state.password}
            required
          />
          <div className="button">
            <CustomButton className="custom-button" type="submit">
              Sign In
            </CustomButton>
            <CustomButton className="custom-button" onClick={signInWithGoogle}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
