import { useState} from "react";
import { Link } from "react-router-dom";
import "./ExpenseForm.css";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    console.log("form Submitted");
    e.preventDefault();

    if (!title.trim() || !amount.trim() || !date.trim() || !category.trim()) {
      console.log("Validation Loading");
      setError("Please fill all fields");
      return;
    }
    else if (isNaN(amount) || Number(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    const expense = {
      id: Date.now(),
      title: title.trim(),
      amount: amount.trim(),
      date: date.trim(),
      category: category.trim()
    };

    addExpense(expense);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setError("");
    setMessage("Expense added successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);

  };

  return (
    <div className="expense-form">
    <form className="form-container" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Expense Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <p>Category:</p>
      <div className="category">
      <label>
        <input type="radio" name="category" value="Food" checked={category === "Food"} onChange={(e) => setCategory(e.target.value)}/>
        Food
      </label>

      <label>
        <input type="radio" name="category" value="Transport" checked={category === "Transport"} onChange={(e) => setCategory(e.target.value)}/>
        Transport
      </label>

      <label>
        <input type="radio" name="category" value="Entertainment" onChange={(e) => setCategory(e.target.value)}/>
        Entertainment
      </label>

      <label>
        <input type="radio" name="category" value="Other" checked={category === "Other"} onChange={(e) => setCategory(e.target.value)}/>
        Other
      </label>
      </div>
      <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">
        Add Expense
      </button>
      {message && <p className="message">{message}</p>}
    </form>
    <Link to="/" className="back-link">
      ← Back to Home
    </Link>
  </div>
);
}

export default ExpenseForm;