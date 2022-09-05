import logoApp from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactioModal: () => void;
}

export function Header({ onOpenNewTransactioModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoApp} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactioModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
