import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Pages/Home";
import AddExpense from "./Pages/AddExpense";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [email, setEmail] = useState(
    localStorage.getItem("email") || ""
  );

  const [expenses, setExpenses] = useState([]);

useEffect(() => {

  if (email) {
    const savedExpenses =
      JSON.parse(localStorage.getItem(`expenses_${email}`)) || [];

    console.log("LOADED:", savedExpenses);

    setExpenses(savedExpenses);
  } else {
    setExpenses([]);
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

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense,
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter(
        (expense) => expense.id !== id
      )
    );
  };

  return (
    <HashRouter>
      <Navbar
        username={username}
        setUsername={setUsername}
        setEmail={setEmail}
      />

      {!username ? (
        <Login
          setUsername={setUsername}
          setEmail={setEmail}
        />
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
            element={
              <AddExpense
                addExpense={addExpense}
              />
            }
          />
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;