import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const PageTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--black-text);
`;
export const BackdropFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7a7cb7;
  opacity: 0.7;
  pointer-events: none;
  z-index: 1;
`;
export const BackdropImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  pointer-events: none;
  z-index: 0;
  background-position: center;
  filter: blur(3px);
  background-size: cover;
  background-image: url("./backgroundcats.jpg");
`;

export const ContentContainer = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  font-size: 40px;
  margin-bottom: 10px;
`;
export const SubHeader = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  margin-bottom: 40px;
`;
export const LoginContainer = styled.div`
  width: 80vw;
  height: auto;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  -webkit-box-shadow: 0px 0px 31px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 31px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
`;
export const StyledInput = styled.input`
  flex-grow: 1;
  border-radius: 10px;
  border: none;
  padding: 2px 10px;
  height: 30px;
`;
export const StyledLabel = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  font-size: 20px;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: #3d3957;
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 20);
  border: none;
`;
export const ErrorText = styled.label`
  color: rgb(100, 20, 20);
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  margin: auto auto;
`;
