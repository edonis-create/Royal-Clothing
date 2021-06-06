import React, { useState } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div className={` ${flip ? "flip" : ""} sign-in-and-sign-up `}>
      <SignIn setFlip={setFlip} />
      <SignUp setFlip={setFlip} />
    </div>
  );
};

export default SignInAndSignUpPage;
