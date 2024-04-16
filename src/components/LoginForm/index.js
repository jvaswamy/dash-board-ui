import { Component } from "react";

import { FcGoogle } from "react-icons/fc";

import { GrApple } from "react-icons/gr";

import {
  LoginContainer,
  Boardcontainer,
  BoardHeading,
  BoardLogincontainer,
  BoardSignContainer,
  SignHeading,
  SignLabel,
  SignWithOterContainer,
  SighWithBtn,
  Text,
  InputContainer,
  InputLabel,
  UsernameInputField,
  FormContainer,
  ForgetText,
  SignButton,
  BannerText,
  RegSpan,
} from "./styledComponents";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };
  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  renderInputField = () => {
    const { username } = this.state;
    return (
      <>
        <InputLabel htmlFor="username">Email address</InputLabel>
        <UsernameInputField
          type="text"
          id="username"
          placeholder="Enter the Email"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <InputLabel htmlFor="password">Password</InputLabel>
        <UsernameInputField
          id="password"
          type="password"
          placeholder="Enterthe Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  render() {
    return (
      <LoginContainer>
        <Boardcontainer>
          <BoardHeading>Board.</BoardHeading>
        </Boardcontainer>
        <BoardLogincontainer>
          <BoardSignContainer>
            <SignHeading>Sign In</SignHeading>
            <SignLabel>Sign in to your account</SignLabel>
            <SignWithOterContainer>
              <SighWithBtn type="button">
                <FcGoogle width={18} height={18} />
                <Text>Sign in with Google</Text>
              </SighWithBtn>
              <SighWithBtn type="button">
                <GrApple width={18} height={18} />
                <Text>Sign in with Apple</Text>
              </SighWithBtn>
            </SignWithOterContainer>
            <FormContainer>
              <InputContainer>{this.renderInputField()}</InputContainer>
              <InputContainer>{this.renderPasswordField()}</InputContainer>
              <ForgetText>Forget Password?</ForgetText>
              <SignButton type="submit">Sign In</SignButton>
              {/* {showSubmitError && <ErrorMgs>*{errorMgs}</ErrorMgs>} */}
            </FormContainer>

            <BannerText>
              Do you have an account?<RegSpan>Register here</RegSpan>
            </BannerText>
          </BoardSignContainer>
        </BoardLogincontainer>
      </LoginContainer>
    );
  }
}

export default LoginForm;
