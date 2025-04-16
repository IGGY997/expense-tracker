function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount ($)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, description, category, amount }) => (
          <tr key={id}>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>
              <button onClick={() => onDelete(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
