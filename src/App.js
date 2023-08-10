import Expense from "./components/Expenses/Expenses";

function App() {
  const expense = [
    {
      id: 'e1',title: 'Car Insurance1', amount: 294, date: new Date(2021, 3, 28)
    },
    {
      id:'e2',title: 'Car Insurance2', amount: 124, date: new Date(2021, 4, 28)
    }
    ,
    {
      id:'e3',title: 'Car Insurance3', amount: 456, date: new Date(2021, 5, 28)
    }
    , {
      id:'e4',title: 'Car Insurance4', amount: 1231, date: new Date(2021, 6, 28)
    }
  ]
  return (
    <div>
      <Expense expense={expense} />
    </div>
  );
}

export default App;
