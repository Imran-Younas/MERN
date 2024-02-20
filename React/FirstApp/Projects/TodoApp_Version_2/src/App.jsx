import AddTodo from "./Components/AddTodo"
import AppName from "./Components/AppName"
import TodoItem from "./Components/TodoItem";


import "./App.css";
function App() {
  return <center className="todo-container">

    <AppName></AppName>
    <AddTodo></AddTodo>

    <div className="item-container">

      <TodoItem itemName='Buy Milk' itemDate='10/04/2023'></TodoItem>
      <TodoItem itemName='Go to Colloge' itemDate='10/04/2023'></TodoItem>


    </div>







  </center>
}

export default App
