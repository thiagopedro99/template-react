import styled from 'styled-components';


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 32px;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 32px;
  max-width: 500px;
`;

const Button = styled.button`
  background-color: #1976d2;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

export { Container, Title, Subtitle, Message, Button };