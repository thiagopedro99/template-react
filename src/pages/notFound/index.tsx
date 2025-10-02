// src/pages/notFound/index.tsx
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Flex } from '@components/common';
import { ErrorCode, Title, Message } from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container $maxWidth="md">
      <Flex 
        $direction="column" 
        $align="center" 
        $justify="center"
        style={{ minHeight: '100vh' }}
      >
        <ErrorCode>404</ErrorCode>
        
        <Card>
          <Flex $direction="column" $align="center" $gap="1.5rem">
            <Title>Página não encontrada</Title>
            
            <Message>
              Desculpe, a página que você está procurando não existe ou foi movida.
            </Message>
            
            <Flex $gap="1rem" $wrap>
              <Button 
                $variant="primary"
                onClick={() => navigate('/')}
              >
                Voltar para Home
              </Button>
              
              <Button 
                $variant="outline"
                onClick={() => navigate(-1)}
              >
                Voltar
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
};

export default NotFound;