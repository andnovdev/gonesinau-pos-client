import React from 'react';
import { formatMoney } from '../../utils';

function SaleItem(props) {
  const { item, onClick } = props;
  return (
    <tr onClick={() => onClick(item)}>
      <td>{item.id}</td>
      <td>{formatMoney(item.total)}</td>
    </tr>
  );
}

export default SaleItem;
