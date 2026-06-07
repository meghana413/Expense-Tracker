import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses added yet.</p>;
  }

  return (
    <div className="Expenselist-Page">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;