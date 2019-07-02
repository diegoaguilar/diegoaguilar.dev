import styled from 'styled-components';

export const Container = styled.div`
  color: rgb(16, 16, 16);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Playfair Display', serif;
  height: 100vh;
  font-size: 7em;
  font-weight: 400;
  text-align: center;
  line-height: 1.25em;
  user-select: none;

  @media (max-width: 400px), (max-height: 600px) {
    font-size: 3em;
    padding: 25px;
  }

  @media (width: 768px), (height: 1024px) {
    font-size: 5em;
    padding: 15px;
  }
`;
