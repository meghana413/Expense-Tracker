import { Link } from "react-router-dom";
import ExpenseList from "../components/ExpenseList";
import "./Home.css";


function Home({ expenses, username , deleteExpense }) {
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <>
    <div className="home">
      <div className="welcome-section">
      <h1>Hello {username}!!
      </h1>
      <p>Here's how you spent today...</p>
      </div>
      <h1 className="main-title">
       Track Your Expenses Today 📅
        </h1>

       <p className="welcome-text">
        Here, you can easily manage and monitor your daily expenses.
      </p>

      <Link to="/add" className="add-btn">
        Add Expense
      </Link>

      <h2 className="total">Total: ₹{total}</h2>

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
    </>
  );
}

export default Home;