import styled from "styled-components";
import {darken} from 'polished'

export const Container = styled.form`
  h2{
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }
  .form-input{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
    background-color: var(--bg-input);
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    height: 4rem;
    padding: 1.25rem 1.5rem;
    color: var(--text-body);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder{
      color: var(--text-body);
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  }

  .btn-primary[type="submit"]{
    margin-top: 1.5rem;
    background-color: var(--green);
    border: none;
    border-radius: 0.3125rem;
    width: 100%;
    height: 4rem;
    display: inline-block;
    color: var(--shape);
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    transition: filter 0.3s;
    &:hover{
      filter: brightness(0.9);
    }
  }
  
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button{
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s;

    &:hover{
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
      width: 1.25rem;
      height: 1.25rem;
    }

    span{
      display: inline-block;
      margin-left: 1rem;
      color: var(--text-title);
    }
  }
`