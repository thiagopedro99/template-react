// src/pages/home/index.tsx
import Layout from "@components/layout";
import { Title, Subtitle, Description } from "./styles";
import { Button, Card, Container, Flex } from "@components/common";
import { useToast } from '@components/toast';

const Home = () => {
  const toast = useToast();


  const handleClick = () => {
    toast.success('Operação realizada com sucesso!');
    toast.info('Informação importante');
    toast.error('Erro ao realizar operação');
    toast.warning('Atenção, operação potencialmente perigosa');
  };


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
            <Button onClick={handleClick}>
              Toast
            </Button>
          </Flex>

        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;