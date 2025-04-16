import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import initialExpenses from "./data/initialExpenses";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (idToDelete) => {
    setExpenses(expenses.filter((exp) => exp.id !== idToDelete));
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortBy) return 0;
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="description">Description</option>
        <option value="category">Category</option>
      </select>

      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={sortedExpenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
