# Expense Tracker

A simple and responsive Expense Tracker built using React and React Router. This application helps users manage daily expenses by adding, viewing, and deleting expense records.

## Features

* User Login with Name and Email
* Add New Expenses
* Categorize Expenses (Food, Transport, Entertainment, Other)
* Select Expense Date
* View Total Expense Amount
* Delete Expenses
* User-Specific Expense Storage using Local Storage
* Responsive Dark Theme UI
* React Router Navigation

## Technologies Used

* React
* React Router DOM
* JavaScript (ES6+)
* CSS3
* Local Storage

## Project Structure

Expense-Tracker/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseItem.jsx
│   │   ├── ExpenseItem.css
│   │   ├── ExpenseList.jsx
│   │   ├── ExpenseList.css
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── AddExpense.jsx
│   │   ├── Login.jsx
│   │   └── Login.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── node_modules/


## Usage

1. Login using your name and email.
2. Add expenses with amount, category, and date.
3. View all expenses on the home page.
4. Delete expenses when needed.
5. Expenses are saved in Local Storage and separated by user email.

## Future Enhancements

* Edit Expense Feature
* Expense Charts and Analytics
* Monthly Expense Reports
* Expense Search and Filter
* Backend Integration with Database
* Authentication System

## Author

Developed by [Your Name]

## License

This project is created for learning and educational purposes.
