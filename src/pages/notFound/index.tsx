import { useNavigate } from 'react-router-dom';
import { Button, Container, Message, Subtitle, Title } from './styles';


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <Message>
        Desculpe, a página que você está procurando não existe ou foi movida.
      </Message>
      <Button onClick={() => navigate('/')}>
        Voltar para a página inicial
      </Button>
    </Container>
  );
};

export default NotFound;
