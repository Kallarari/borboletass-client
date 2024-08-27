import PageContainer from "@/components/PageContainer";
import React from "react";
import { Icon } from "@iconify/react";
import {
  IndicationContainer,
  ImageContainer,
  PerfilIMage,
  Container,
  PageHeader,
  IconsContainer,
} from "../../styles/Dasboard.module";
import IndicaTionDasboardCard from "@/components/IndicaTionDasboardCard";
import PagesTitle from "@/components/PagesTitle";
import DefaultButton from "@/components/DefaultButton";
import { useRouter } from "next/router";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const IndicationsArray = [
    { title: "Ansiedade", subtitle: "Uma sensação que carrega..." },
    {
      title: "Luto pela infância",
      subtitle: "Com a chegada da dolescência...",
    },
    { title: "Linguagens do amor", subtitle: "De acordo com o livro..." },
    { title: "Higiene do sono", subtitle: "Uma noite bem dormida..." },
  ];
  return (
    <PageContainer>
      <Container>
        <ImageContainer>
          <PerfilIMage />
          <PageHeader>Psicóloga Clinica Angela Silva</PageHeader>
          <IconsContainer>
            <a href="https://www.instagram.com/psicologangelasilva/">
              <Icon width={40} color="#777" icon="mdi:instagram" />
            </a>
            <a href="https://wa.me/554196616283">
              <Icon width={40} color="#777" icon="ic:baseline-whatsapp" />
            </a>
          </IconsContainer>
        </ImageContainer>
        <IndicationContainer>
          {IndicationsArray.map((itens) => (
            <IndicaTionDasboardCard
              title={itens.title}
              subtitle={itens.subtitle}
            ></IndicaTionDasboardCard>
          ))}
        </IndicationContainer>
        <DefaultButton
          onClick={() => router.push("/Dashboard/Diarys")}
          label="Diário"
        ></DefaultButton>
      </Container>
    </PageContainer>
  );
};

export default Dashboard;
