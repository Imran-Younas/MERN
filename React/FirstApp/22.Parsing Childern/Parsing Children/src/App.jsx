import ErrorMsg from "./Components/ErrorMsg";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
function App() {

  let foodItem = ["Freash Fruit", "Salad", "Diry Milk", "Wheat Bread", "Sea Food", "Green Vegtable"]
  let carsList = ["Revo", "Fortuner", "ZX", "Reborn", "Civic X"]


  return (
    <>
      <Container>
        <h1>Health Food List</h1>
        <ErrorMsg itemList={foodItem}></ErrorMsg>
        <FoodList itemList={foodItem}></FoodList>

      </Container>

      <Container>
        <h1>Cars List</h1>
        <ErrorMsg itemList={carsList}></ErrorMsg>
        <FoodList itemList={carsList}></FoodList>

      </Container>

    </>


  );
}

export default App;