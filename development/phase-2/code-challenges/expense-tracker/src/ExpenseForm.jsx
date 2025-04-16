import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.category || !formData.amount) return;
    onAddExpense({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ description: "", category: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
