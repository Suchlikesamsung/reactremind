import Expenseitem from "./components/Expenseitem";

function App() {
  const expense = [
    {
      title: 'Car Insurance1', amount: 294, date: new Date(2021, 3, 28)
    },
    {
      title: 'Car Insurance2', amount: 124, date: new Date(2021, 4, 28)
    }
    ,
    {
      title: 'Car Insurance3', amount: 456, date: new Date(2021, 5, 28)
    }
    , {
      title: 'Car Insurance4', amount: 1231, date: new Date(2021, 6, 28)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenseitem
        data={expense[0]}/>
      <Expenseitem
        data={expense[1]}/>
      <Expenseitem
      data={expense[2]}/>

    </div>
  );
}

export default App;
