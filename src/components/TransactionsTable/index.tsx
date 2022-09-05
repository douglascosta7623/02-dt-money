import { useEffect } from 'react';
import { api } from '../../server/api';
import { Container } from './style';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="title">Desenvolvimento de Site</td>
              <td className="deposit">R$ 1.500</td>
              <td>Venda</td>
              <td>01/09/2022</td>
            </tr>
            <tr>
              <td className="title">Desenvolvimento de Site 2</td>
              <td className="deposit">R$ 3.000</td>
              <td>Venda</td>
              <td>02 /09/2022</td>
            </tr>

            <tr>
              <td className="title">Conta Faculdade</td>
              <td className="withdraw">R$ 3.000</td>
              <td>Venda</td>
              <td>02 /09/2022</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
