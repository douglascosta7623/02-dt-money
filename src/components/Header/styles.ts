import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content =styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    height: 3rem;
    padding: 0rem 2rem;
    background-color: var(--blue-light);
    color: var(--shape);
    font-size: 1rem;
    border:0;
    border-radius: 0.25rem;
    flex-wrap: no-wrap;

    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
  `;


