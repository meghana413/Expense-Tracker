import ExpenseForm from "../components/ExpenseForm";

function AddExpense({ addExpense }) {
  return (
    <div>
      <h1>Add Expense</h1>
      <p className="form-description">Add your expenses here.</p>
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default AddExpense;