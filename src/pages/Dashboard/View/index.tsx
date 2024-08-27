import PageContainer from "@/components/PageContainer";
import { BodyView, HeaderView } from "@/styles/DashboardView.module";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

const View: React.FC = () => {
  const searchParams = useSearchParams();
  const [indicationToView, setIndicationToView] = useState<{
    title: string;
    subtitle: string;
  }>();
  const params: { indication: string | null } = {
    indication: searchParams.get("indication"),
  };
  const IndicationsArray = [
    {
      title: "Ansiedade",
      subtitle: `Uma sensação que carrega sentimentos de tensão,
    preocupação, pensamentos negativos e hoje atinge 62%da população brasileira segundo últimas pesquisas da revista Exame. A ansiedade. Não significa precisamente que a causa esteja no momento atual, experiências
    difíceis na infância e adolescência podem ser o gatilho que acaba impactando em crises na vida adulta, abusos físicos e emocionais podem estar diretamente ligados as crises de ansiedade.
    Durante uma crise de ansiedade, o pânico pode
    tomar conta, taquicardia, sensação de falta de ar,
    tontura e medo constante. Alguns exercicios ajudam
    muito durante uma crise, e é de grande ajuda saber para
    amenizar e tranquilizar em uma próxima.
    Visualização, acalmar, lembrar e visualizar algum lugar calmo em que já esteve, florestas, montanhas ou uma praia deserta, sensação de paz deve tomar conta.Metodo 5,4,3,2,1. Procurar 5 coisas que voce pode ver, 4 coisas que pode tocar, 3 coisas que pode escutar 2 coisas que pode sentir o cheiro e 1 coisa que pode saborear. Essa técnica ajuda a estar no presente, foca no agora.
    Respiração em quadrado, inspirar contando ate 4.segurar o ar contando até 4, expirar contando ate 4, e contar até 4 novamente antes de inpirar outra vez
    uma maneira de ajudar é imaginar a construi
    quadrado em sua mente quando pratica o exer
    isso o nome, repetir essa pratica até sentirse mais
    calmo
    Folhas no rio, imagine-se sentado nas margens de um riacho, e imagine folhas flutuando correnteza abaixo, e cada vez que pensamentos negativos aparecerem,
    coloque eles em uma folha e veja o rio levar eles para
    longe, continue até se acalmar, praticando esse
    exercicio você pode criar uma distância entre a
    ansiedade e você.
    Meditar caminhando, incorporando duas atividades saudáveis, caminhar e colocar sua atenção ao seu redor, prestar atenção nas cores que te cativam mais,sentir os cheiros e descobrir de onde vêm, escutar e identificar o que escuta mesmo que seja muito ruido,notar o que isso faz com seu corpo, e como ele se
    comporta.
    Lembrando que muitas outras coisas ajudam muito e
    devem se tornar habitos, prática de um esporte, boa
    alimentação, leitura, cuidar do jardim, atividades que
    fazem com que esteja vivendo no presente.`,
    },
    {
      title: "Luto pela infância",
      subtitle: `Com a chegada da adolescência, chegam também mudanças, as mais óbvias no corpo e comportamento do adolescente, mas também na aceitação dos pais que agora parecem estar vivendo com um estranho em casa, fase que em muitos casos geram conflitos e desconexão entre pais e filhos, os filhos buscam seu lugar, já não são mais crianças, buscam sua identidade aumentam as responsabilidades e despertam a
      sexualidade. Os pais acostumados com a inocência e alegria de uma criança em casa, muitas vezes reagem de maneira negativa a essa mudança, e isso é uma forma de luto, não de uma perda concreta, mas uma perda simbólica pela criança perdida.
      Os pais precisam lidar com a perda do que a criança representava, a pureza, proximidade, a dependência que a criança tinha deles, e negando esse luto, os pais
      tendem a não aprovar essa nova fase em seus filhos Quando um adolescente começa agir de uma maneira diferente daquela idealizada pelos pais, comecam a questionar o que fizeram de errado, como se um filho deveria seguir apenas os acertos, sem cometer os erros que os pais tiveram em suas adolescências. E isso
      também leva ao luto, pela sua própria juventude,
      quando maioria dos pais percebe que estão
      envelhecendo. A intensidade que os pais vivenciam
      esse luto, projetando um fiho deal é compativel com a
      dor que irão sentir a perda
      Assim como a perda concreta, a solução para a perda simbólica é o reconhecimento, identificar e aceitar o luto. Saber lidar com a angústia e entender essa mudança natural na vida de seus filhos. Não entendendo isso, muitas vezes os pais acabam
      refletindo sua frustração contra o próprio adolescente,criando um atrito que pode resultar em fazer com que o filho não sinta-se amado pelos pais. Somando isso a suas mudanças corporais que podem gerar traumas.Entender a situação como um novo nascimento,aceitar e adaptar a esse novo corpo, a criança cresceu,um filho cheio de dúvidas, passando por sensações novas necesita apoio emocional e exemplo vindo dos pais. Aceitar a adolescência, vai ajudar um filho a passar por essa fase com muito mais leveza.`,
    },
    { title: "Linguagens do amor", subtitle: "De acordo com o livro..." },
    {
      title: "Higiene do sono",
      subtitle: `Uma noite bem dormida vai muito além do obrigatório
    ato do descanso, dormir é inevitável, assim como
    comer, nossa alimentação necesita de hábitos saudáveis para qualidade de nossas vidas, assim é também com nosso sono. A má qualidade de nosso sono pode trazer problemas sérios, fisicos e mentais como ansiedade, depressão e em alguns casos podem acarretar inclusive com o desenvolvimento da
    demência. Cuidar de nosso descanso é um ato de amor
    próprio, valorizar, priorizar, personalizar, confiar e
    proteger nosso sono são os cincos principios para uma noite bem dormida. Mesmo com as mudanças do dia a dia, sejam na vida social ou profissional, é possivel crial hábitos que ajudem a proteger nosso descanso,
    Nem sempre a rotina poderá ser seguida, mas e sobrel criar um hábito, e alcançar o ponto em que fazemos isso automaticamente, zelando nosso repouso. Nos dias de hoje o celular é um grande inimigo, a constante tentação de dar uma espiada nas redes sociais
    atrapalha muito, consumir bebidas alcoolicas, cafeina,alimentos gordurosos a noite, excesso de atividade fisica pouco antes de deitar, os inimigos do bom sono são inúmeros. Mas todos podem ser evitados, e guonto mais evitar, melhor será sua noite, e conseq uemememte seu dia.
    Aém de evitar o consumo de certas coisas e também
    tefiarficarlonge de aparelhos eletróni cos pelo menos
    56% +
    30 minutos antes de se deitar, dormir e acordar no mesmo horário é muito eficaz para aumentar a qualidade, embora seja difícil dependendo
    principalmente de sua vida profissional, e existem outros hábitos que ajudam muito e säo prazerosos ao fazer, tomar um banho, colocar o pijama, ler um pouco um livro ou revista, deixar que o sono venha
    naturalmente.
    Durma bem, para viver bem.`,
    },
    {
      title: "Cinco linguagens do amor",
      subtitle: `De acordo com o livro do Pastor Batista Gary
    Chapman, o amor possui 5 maneiras de ser entendido,
    ou seja, é um idioma. Para um relacionamento
    duradouro é importante não apenas saber que linguagem falar com seu parceiro ou parceira, mas também saber qual linguagem queremos que falem conosco. Nem todos recebemos carinho e amor da mesma forma, nem todos necessitamos as mesmas coisas, por isso é importante que um casal entenda como demonstrar esse sentimento de maneira eficaz,falando a linguagem do amor que o outro precisa receber
    De acordo com Chapman as cinco linguagens são
    - Palavras de afirmação, o simples gesto de elogiar um esforço ou uma qualidade em seu parceiro, o cabelo, a maneira como se veste, como cozinha bem, coisas que no dia a dia podem escapar despercebidos
    -Tempo de qualidade, não apenas estar fisicamente
    ocupando o mesmo espaço, mas fazer coisas
    agradáveis juntos, como um cinema, um jantar, disfrutar
    a companhia de seu parceiro
    -Dar presentes, não significa gastar seus economias todas em jóias caras, mas presente é um símbolo de que lembramos da pessoa, uma caixa de bombons ou aquele doce favorito já será um gesto de amor.
    Atos de serviço, o esforço em dividir tarefas,
    surpreender sua parceira com cozinha limpa pela manhã, lavar a roupa dos dois, regar as plantas, atos que muitas vezes acostumamos a deixar na
    responsabilidade de apenas um.
    Toque físico, andar de mãos dadas, fazer um carinho mesmo assistindo um filme, um beijo inesperado durante um churrasco com amigos.
    Bons exemplos, talvez sejam no cotidiano, um marido que passa muito tempo fora e chegando em casa ele pensa que cozinhar e lavar a louça seja um ato de amor a sua esposa (atos de serviço) mas ela talvez não se importe com isso, ela queria estar abraçada no sofá(toque fisico) e assistir um filme de comédia juntos(tempo de qualidade) e ao lavar a louça e cozinhar ele não está falando a linguagem que ela quer escutar. E ao terminar de cozinhar e lavar tudo, ele espera que ela agradeça (palavras de afirmação). Outro dia ela pode sair com uma amiga, passar o dia juntas, almoçar e tomar um café, ir ao shooping, comprar coisas, fazer a ha, ele espera ela voltar e aguarda uma lembrança presentes) nem que seja um par de meias, um imbolo de que ela lembrou dele durante o dia, ela fez a e espereva ele notar isso( palavras de afirmação).logian como estava bonita, Ambos não falaram a inguagem esperada e o resultado não foi saudävel de jenhuma das pertes, mesmo que com boas intenções.`,
    },
  ];
  const router = useRouter();
  useEffect(() => {
    let IndicationToview = IndicationsArray.find(
      (item) => item.title === params.indication
    );
    if (IndicationToview) return setIndicationToView(IndicationToview);
    else {
      router.back();
    }
  }, []);
  return (
    <PageContainer hasBackButton>
      <HeaderView>{indicationToView?.title}</HeaderView>
      <BodyView>{indicationToView?.subtitle}</BodyView>
    </PageContainer>
  );
};

export default View;
