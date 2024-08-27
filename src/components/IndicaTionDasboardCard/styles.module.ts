import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  border-radius: 20px;
  padding:10px;
  width: 80px;gap: 40px;
  -webkit-box-shadow: 0px 0px 31px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 31px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);

`;
export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
export const Subtitle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
  font-size: 12px;
  margin-bottom: 10px;
`;
