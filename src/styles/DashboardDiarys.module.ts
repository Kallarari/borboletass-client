import styled from "styled-components";

export const ContainerDiarys = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ButtonsContainer = styled.div``;
export const HappinessContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
`;
export const StyledSpan = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--black-text);
  font-size: 14px;
  font-weight: 600;
`;
interface IhappinesCard {
  isClicked: boolean;
}
export const HappinesCard = styled.div<IhappinesCard>`
  width: 30vw;
  border-radius: 10px;
  border: 1px solid #888;
  background-color: #fff;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: ${(props) =>
    props.isClicked && " 0px 0px 10px -1px rgba(0, 0, 0, 0.75)"};
`;
