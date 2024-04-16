import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Boardcontainer = styled.div`
  background-color: #000000;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
`;

export const BoardLogincontainer = styled.div`
  background-color: #f5f5f5;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardSignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  /* background-color: yellow; */
`;
export const SignHeading = styled.h1`
  color: #000000;
  font-size: 24px;
  align-self: flex-start;
  margin: 0px;
`;
export const SignLabel = styled.p`
  color: #000000;
  font-size: 16px;
  align-self: flex-start;
  margin-top: 0px;
`;

export const SignWithOterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 8px;
`;
export const SighWithBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 9px 14px;
`;
export const Text = styled.p`
  color: #858585;
  font-size: 14px;
  margin-left: 8px;
  margin: 0px;
  margin-left: 5px;
`;

export const FormContainer = styled.form`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 18px;
  background-color: #ffffff;
  border-radius: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;
export const UsernameInputField = styled.input`
  font-size: 12px;
  height: 30px;
  color: #64748b;
  border-radius: 6px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  border: none;
  background-color: #f5f5f5;
`;

export const ForgetText = styled.p`
  font-size: 13px;
  color: blue;
`;
export const SignButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  width: 100%;
  background-color: #000000;
  font-size: 12px;
  color: #ffffff;
  height: 30px;
`;

export const BannerText = styled.p`
  font-size: 12px;
  color: f5f5f5;
  text-align: center;
`;
export const RegSpan = styled.span`
  font-size: 12px;
  color: blue;
`;
