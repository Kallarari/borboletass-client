"use client";
import PageContainer from "@/components/PageContainer";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "@/components/DefaultButton";
import { useAuthStore } from "@/store/authStore";
import { IUser } from "@/types/IUser";

const HomePage: React.FC = () => {
  const { saveUser } = useAuthStore();
  const router = useRouter();
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  function handleMakeLogin() {
    axios
      .get<IUser>(`api/users/Login?userName=${login}&password=${password}`)
      .then((res) => {
        if (login) saveUser(res.data);
        if(res.data.type == "admin")
          return router.push("/AdminDashboard"); 
        router.push("/Dashboard/Diarys"); 
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }
  useEffect(() => {
    setIsInitialPage(false);
    let user = window.localStorage.getItem('auth')
    if (!!user) {
      router.push("/Dashboard/Diarys"); 
    }    
  }, []);
  return !isInitialPage ? (
    <PageContainer>
      <WellComeContainer>
        <HeaderBlack>Bem vindo(a)</HeaderBlack>
        <DefaultButton
          onClick={() => setIsInitialPage(true)}
          label="Fazer Login"
        ></DefaultButton>
        <LogoBorboletass></LogoBorboletass>
      </WellComeContainer>
    </PageContainer>
  ) : (
    <Container>
      <ContentContainer>
        <Header>Borboletass</Header>
        {/* 
        <SubHeader>Bem vindo </SubHeader> */}
        <LoginContainer>
          <InputContainer>
            <StyledLabel>Nome de usuário</StyledLabel>
            <StyledInput
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Digite aqui..."
            ></StyledInput>
          </InputContainer>
          <InputContainer>
            <StyledLabel>Senha</StyledLabel>
            <StyledInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Digite aqui..."
            ></StyledInput>
          </InputContainer>
          <StyledButton onClick={handleMakeLogin}>Login</StyledButton>
        </LoginContainer>
        {hasError && <ErrorText>Senha ou usuário incorretos</ErrorText>}
      </ContentContainer>
      <BackdropFilter></BackdropFilter>
      <BackdropImage></BackdropImage>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const PageTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--black-text);
`;
const BackdropFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7a7cb7;
  opacity: 1;
  pointer-events: none;
  z-index: 1;
`;
const BackdropImage = styled.div`
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
`;

const ContentContainer = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  font-size: 40px;
  margin-bottom: 60px;
`;
const HeaderBlack = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--black-text);
  font-size: 40px;
  margin: 0px;
`;
const LogoBorboletass = styled.div`
  width: 262px;
  height: 99px;
  background-image: url("./logo.png");
`;
const WellComeContainer = styled.div`
  background: url("./buterflybackground.png") no-repeat center center fixed;
  height: 80vh;
  width: 100vw;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const SubHeader = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  margin-bottom: 40px;
`;
const LoginContainer = styled.div`
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
const StyledInput = styled.input`
  flex-grow: 1;
  border-radius: 10px;
  border: none;
  padding: 2px 10px;
  height: 30px;
`;
const StyledLabel = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  font-size: 20px;
  width: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledButton = styled.button`
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
const ErrorText = styled.label`
  color: rgb(100, 20, 20);
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  margin: auto auto;
`;
