import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './style';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button onClick={onRequestClose} className="btn-close" type="button">
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
          <h2>Cadastrar transação</h2>
          <div className="form-input">
            <input placeholder="Título" />
            <input type="number" placeholder="Valor" />
            <TransactionTypeContainer>
              <button type="button">
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
              </button>

              <button type="button">
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </button>
            </TransactionTypeContainer>
            <input placeholder="Categoria" />
          </div>

          <button className="btn-primary" type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    </>
  );
}
