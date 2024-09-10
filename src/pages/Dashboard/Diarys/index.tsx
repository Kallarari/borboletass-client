import DefaultInput from "@/components/DefaultInput";
import React, { useEffect, useState } from "react";
import { EosIconsLoading } from "../../../../public/assets/components/LoadingCircle";
import PagesTitle from "@/components/PagesTitle";
import PageContainer from "@/components/PageContainer";
import {
  ContainerDiarys,
  HappinesCard,
  HappinessContainer,
  StyledSpan,
} from "@/styles/DashboardDiarys.module";
import DefaultButton from "@/components/DefaultButton";
import DefaultTextArea from "@/components/DefaultTextArea";
import { ButtonsContainer } from "@/styles/Diarys.module";
import { IDiary } from "@/types/IDiary";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useRouter } from "next/router";

// import { Container } from './styles';

const Diarys: React.FC = () => {
  useEffect(() => {
    let user = window.localStorage.getItem("auth");
    if (!!user) {
      router.push("/");
    }
  }, []);
  const [diary, setDiary] = useState<IDiary>({
    _id: "",
    content: "",
    data: "",
    happiness: 0,
    title: "",
    user: "",
  });
  const [hasError, setHasError] = useState({
    title: false,
    content: false,
  });
  const router = useRouter();
  function handleCreateDiary() {
    if (diary.title === "") {
      return setHasError((prev) => ({ ...prev, title: true }));
    }
    if (diary.content === "") {
      return setHasError((prev) => ({ ...prev, content: true }));
    }
    axios
      .post("../api/diary/Create", {
        happiness: diary.happiness,
        content: diary.content,
        title: diary.title,
        data: new Date(),
        user: window.localStorage.getItem("user"),
      })
      .then((res) => router.push("/Dashboard"))
      .catch((err) => router.push("/Dashboard"));
  }
  return (
    <PageContainer hasBackButton>
      <ContainerDiarys>
        <PagesTitle>Como está seu dia?</PagesTitle>
        <DefaultInput
          value={diary.title}
          onChange={(e) =>
            setDiary((prev) => ({ ...prev, title: e.target.value }))
          }
          hasError={hasError.title}
          placeholder="Como seria em uma palavra"
          label="Dê nome a esse dia"
        ></DefaultInput>
        <DefaultTextArea
          value={diary.content}
          onChange={(e) =>
            setDiary((prev) => ({ ...prev, content: e.target.value }))
          }
          hasError={hasError.content}
          label="Diário"
          placeholder="Abra seu coração"
        ></DefaultTextArea>
        <PagesTitle>Como está seu humor?</PagesTitle>
        <HappinessContainer>
          <HappinesCard
            isClicked={diary.happiness == 0}
            onClick={() => setDiary((prev) => ({ ...prev, happiness: 0 }))}
          >
            <Icon width={40} color="#242a67" icon="ant-design:smile-filled" />
            <StyledSpan>Feliz</StyledSpan>
          </HappinesCard>
          <HappinesCard
            isClicked={diary.happiness == 1}
            onClick={() => setDiary((prev) => ({ ...prev, happiness: 1 }))}
          >
            <Icon width={38} color="#fa1" icon="fa6-solid:face-meh" />
            <StyledSpan>Indiferente</StyledSpan>
          </HappinesCard>
          <HappinesCard
            isClicked={diary.happiness == 2}
            onClick={() => setDiary((prev) => ({ ...prev, happiness: 2 }))}
          >
            <Icon width={40} color="#302f2f" icon="mingcute:sad-fill" />
            <StyledSpan>Triste</StyledSpan>
          </HappinesCard>
        </HappinessContainer>

        <HappinessContainer>
          <HappinesCard
            isClicked={diary.happiness == 3}
            onClick={() => setDiary((prev) => ({ ...prev, happiness: 3 }))}
          >
            <Icon
              width={40}
              color="#242a67"
              icon="material-symbols:sentiment-calm"
            />
            <StyledSpan>Calmo</StyledSpan>
          </HappinesCard>
          <HappinesCard
            isClicked={diary.happiness == 4}
            onClick={() => setDiary((prev) => ({ ...prev, happiness: 4 }))}
          >
            <Icon
              width={38}
              color="#fa1"
              icon="material-symbols:sentiment-stressed-rounded"
            />
            <StyledSpan>Em pânico</StyledSpan>
          </HappinesCard>
          <HappinesCard
            isClicked={diary.happiness == 5}
            onClick={() => setDiary((prev) => ({ ...prev, happiness: 5 }))}
          >
            <Icon
              width={40}
              color="#302f2f"
              icon="material-symbols:sentiment-dissatisfied-rounded"
            />
            <StyledSpan>Confuso</StyledSpan>
          </HappinesCard>
        </HappinessContainer>
        <ButtonsContainer>
          <DefaultButton
            onClick={() => handleCreateDiary()}
            label="Criar página do diário"
          ></DefaultButton>
        </ButtonsContainer>
      </ContainerDiarys>
    </PageContainer>
  );
};

export default Diarys;
