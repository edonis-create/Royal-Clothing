import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">SIGN UP</h2>
        <form
          autoComplete="off"
          className="sign-up-form"
          onSubmit={this.onHandleSubmit}
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.onHandleChange}
            label="Display Name"
            required
          />{" "}
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.onHandleChange}
            label="Email"
            required
          />{" "}
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.onHandleChange}
            label="Password"
            required
          />{" "}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onHandleChange}
            label="Confirm Password"
            required
          />
          <div className="sign-up-button">
            <CustomButton type="submit">SIGN UP</CustomButton>
            <span>
              Already have an account?{" "}
              <strong onClick={() => this.props.setFlip(false)}>SIGN IN</strong>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
