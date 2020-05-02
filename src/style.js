import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 40px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 50vw;
  height: 340px;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid gray;
`;

export { Container, Card };