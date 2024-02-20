import ErrorMsg from "./Components/ErrorMsg";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {

  let foodItem = ["Freash Fruit", "Salad", "Diry Milk", "Wheat Bread", "Sea Food", "Green Vegtable"]
  let carsList = ["Revo", "Fortuner", "ZX", "Reborn", "Civic X"]


  return (
    <>
      <Container>
        <h1>Health Food List</h1>
        <ErrorMsg itemList={foodItem}></ErrorMsg>
        <FoodInput></FoodInput>
        <FoodList itemList={foodItem}></FoodList>

      </Container>

    </>


  );
}

export default App;