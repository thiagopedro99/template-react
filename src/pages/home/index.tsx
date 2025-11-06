// src/pages/home/index.tsx
import { useNavigate } from 'react-router-dom';
import Layout from "@components/layout";
import { Title, Subtitle, Description } from "./styles";
import { Button, Card, Container, Flex } from "@components/common";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout pageTitle="Home">
      <Container $maxWidth="lg">
        <Flex $direction="column" $align="center" $gap="2rem">

          <div style={{ textAlign: 'center' }}>
            <Title>Bem-vindo ao Template React</Title>
            <Subtitle>Um template moderno e pronto para começar</Subtitle>
          </div>

          <Card>
            <Description>
              Este é um template completo usando React 19, TypeScript, Vite e Styled Components.
              Com componentes reutilizáveis, sistema de temas, gerenciamento de estado e muito mais.
              Personalize como quiser e comece a desenvolver!
            </Description>
          </Card>

          <Flex $gap="1rem" $wrap>
            <Button 
              $variant="primary"
              onClick={() => navigate('/getting-started')}
            >
              Começar
            </Button>
            <Button 
              $variant="outline"
              onClick={() => navigate('/components')}
            >
              Ver Componentes
            </Button>
          </Flex>

        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;