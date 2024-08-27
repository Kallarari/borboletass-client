import styled from "styled-components";

export const IndicationContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow: auto;
  width: 100vw;
  padding: 10px 0px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PerfilIMage = styled.div`
  background-image: url("./perfil.png");
  width: 180px;
  height: 180px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 2px solid #888;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const PageHeader = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--black-text);
  width: 100%;
  font-size: 18px;
  text-align: center;
`;
export const IconsContainer = styled.div`
  display: flex;
  gap: 30px;
`;
