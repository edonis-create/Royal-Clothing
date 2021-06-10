import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  onHandleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={` sign-in`}>
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
            <CustomButton
              type="button"
              className="custom-button"
              onClick={signInWithGoogle}
            >
              Google Sign In
            </CustomButton>
          </div>
          <div className="sign-up-sign-in">
            <span style={{ color: "#ffdf6c", marginBottom: "10px" }}>
              -DONT HAVE AN ACCOUNT?-
            </span>
            <CustomButton
              onClick={() => this.props.setFlip(true)}
              type="button"
              className="custom-button"
            >
              SIGN UP
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
