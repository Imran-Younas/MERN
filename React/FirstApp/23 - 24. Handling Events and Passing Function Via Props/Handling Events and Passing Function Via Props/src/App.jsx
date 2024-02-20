import ErrorMsg from "./Components/ErrorMsg";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {

  // let foodItem = ["Freash Fruit", "Salad", "Diry Milk", "Wheat Bread", "Sea Food"]
  // let carsList = ["Revo", "Fortuner", "ZX", "Reborn", "Civic X"]

  // let text = "Entered Text"

  let [foodItem, SetFoodItem] = useState(["Freash Fruit", "Salad", "Diry Milk",])


  const onKeyDown = (event) => {

    if (event.key === "Enter") {
      let newFoodItem = target.event.value;
      let newItemList = [...foodItem, newFoodItem]
      SetFoodItem(newItemList);
    }

  }


  return (
    <>
      <Container>
        <h1>Health Food List</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg itemList={foodItem}></ErrorMsg>
        {/* <p>{textToShow}</p> */}
        <FoodList key={foodItem} itemList={foodItem}></FoodList>

      </Container>

    </>


  );
}

export default App;