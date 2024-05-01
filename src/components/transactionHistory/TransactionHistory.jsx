import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css.tableTransaction}>
        <thead>
          <tr className={css.headTransaction}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className={css.trTransaction} key={item.id}>
              <td className={css.lineTransaction}>{item.type}</td>
              <td className={css.lineTransaction}>{item.amount}</td>
              <td className={css.lineTransaction}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
