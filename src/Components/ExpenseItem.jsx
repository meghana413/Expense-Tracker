import './ExpenseItem.css'

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
  {/* <div className="expense-info"> */}
    <div>
    <h3>{expense.title} - ₹{expense.amount}</h3>
    </div>
    <div>
    <h4  >{expense.date}</h4>
    </div>
    <div>
    <h4>type: {expense.category}</h4>
    {/* </div> */}
  </div>

  <button
    className="delete-btn"
    onClick={() => deleteExpense(expense.id)}
  >
    Delete
  </button>
</div>
  );
}

export default ExpenseItem;