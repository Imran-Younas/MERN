import ErrorMsg from "./Components/ErrorMsg";
import FoodList from "./Components/FoodList";
function App() {

  let foodItem = ["Freash Fruit", "Salad", "Diry Milk", "Wheat Bread", "Sea Food", "Green Vegtable"]


  return <>
    <h1>Health Food List</h1>
    <ErrorMsg itemList={foodItem}></ErrorMsg>
    <FoodList itemList={foodItem}></FoodList>

  </>
}

export default App;