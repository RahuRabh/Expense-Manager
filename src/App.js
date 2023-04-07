import React , {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "house-rent",
    amount: 550,
    date: new Date(2023, 3, 3)
  },
  {
    id: "e2",
    title: "school-fee",
    amount: 250,
    date: new Date(2023, 5, 2)
  },
  {
    id: "e3",
    title: "tution-fee",
    amount: 200,
    date: new Date(2023, 4, 26)
  },
  {
    id: "e4",
    title: "food",
    amount: 350,
    date: new Date(2023, 1, 12)
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense = { addExpenseHandler }/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;