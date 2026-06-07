import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Pages/Home";
import AddExpense from "./Pages/AddExpense";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import "./App.css"

function App() {

  const [expenses, setExpenses] = useState([]);
  const [username, setUsername] = useState(
         localStorage.getItem("username") || ""
);

  const [email, setEmail] = useState(
  localStorage.getItem("email") || ""
);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  useEffect(() => {
  if (email) {
    const savedExpenses =
      JSON.parse(localStorage.getItem(`expenses_${email}`)) || [];

    setExpenses(savedExpenses);
  }
}, [email]);


  useEffect(() => {
  if (email) {
    localStorage.setItem(
      `expenses_${email}`,
      JSON.stringify(expenses)
    );
  }
}, [expenses, email]);

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <HashRouter>
    <Navbar username={username} setUsername={setUsername} />
    { !username ? (
       <Login setUsername={setUsername} setEmail={setEmail} />
     ) : (
      <Routes>
        <Route
          path="/"
          element={
            <Home
              expenses={expenses}
              deleteExpense={deleteExpense}
              username={username}
            />
          }
        />
        <Route
          path="/add"
          element={<AddExpense addExpense={addExpense} />}
        />
   
      </Routes>
     )}
    </HashRouter>
  );
}

export default App;
