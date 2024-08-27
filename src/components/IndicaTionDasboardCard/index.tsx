import React from "react";
import { Container, Title, Subtitle } from "./styles.module";
import { IIndicationDasboard } from "./interface";
import { useRouter } from "next/router";

// import { Container } from './styles';

const IndicaTionDasboardCard: React.FC<IIndicationDasboard> = ({
  title,
  subtitle,
}: IIndicationDasboard) => {
  const router = useRouter();
  return (
    <Container
      onClick={() => router.push(`/Dashboard/View?indication=${title}`)}
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default IndicaTionDasboardCard;
