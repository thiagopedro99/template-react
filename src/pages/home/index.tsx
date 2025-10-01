// src/pages/home/index.tsx
import Layout from "@components/layout";
import { Title, Subtitle, Description } from "./styles";
import { Button, Card, Container, Flex } from "@components/common";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Container $maxWidth="lg">
        <Flex $direction="column" $align="center" $gap="2rem">
          
          <div style={{ textAlign: 'center' }}>
            <Title>Bem-vindo ao Template React</Title>
            <Subtitle>Um template simples e pronto para começar</Subtitle>
          </div>

          <Card>
            <Description>
              Este é um template básico usando React, TypeScript, Vite e Styled Components.
              Personalize como quiser e comece a desenvolver!
            </Description>
          </Card>

          <Flex $gap="1rem">
            <Button $variant="primary">
              Começar
            </Button>
            <Button $variant="outline">
              Saiba Mais
            </Button>
          </Flex>

        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;