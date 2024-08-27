"use client";
import PageContainer from "@/components/PageContainer";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Container,
  BackdropFilter,
  ContentContainer,
  Header,
  BackdropImage,
  SubHeader,
  LoginContainer,
  StyledInput,
  StyledLabel,
  InputContainer,
  StyledButton,
  ErrorText,
} from "../styles/Homepage.module";
import DefaultButton from "@/components/DefaultButton";
import DefaultInput from "@/components/DefaultInput";

// import { Container } from './styles';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  function handleMakeLogin() {
    axios
      .get(`api/users/Login?userName=${user}&password=${password}`)
      .then((res) => router.push('/Dashboard'))
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }
  return (
    <Container>
      <ContentContainer>
        <Header>Borboletass</Header>
        <SubHeader>Texto subtitulo do borboletass</SubHeader>
        <LoginContainer>
          <InputContainer>
            <StyledLabel>Nome de usuário</StyledLabel>
            <StyledInput
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
