import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headLine}>
        <tr>
          <th className={css.headName}>Type</th>
          <th className={css.headName}>Amount</th>
          <th className={css.headName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(data => (
          <tr key={data.id} className={css.line}>
            <td className={css.tableCell}>{data.type}</td>
            <td className={css.tableCell}>{data.amount}</td>
            <td className={css.tableCell}>{data.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.protoType = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
