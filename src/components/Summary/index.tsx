import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeIcon} alt="Entradas" />
          </header>

          <strong>R$ 1.500</strong>
        </div>

        <div>
          <header>
            <p>Saída</p>
            <img src={outcomeIcon} alt="Entradas" />
          </header>

          <strong>- R$ 500</strong>
        </div>

        <div className="highlight-bg">
          <header>
            <p>Total</p>
            <img src={totalIcon} alt="Total" />
          </header>

          <strong>R$ 1000</strong>
        </div>
      </Container>
    </>
  );
}
