import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  width: 90%;
  margin: 60px auto;
  padding: 30px;
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin: 0;
  color: ${({ theme }) => theme.text || '#333'};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
