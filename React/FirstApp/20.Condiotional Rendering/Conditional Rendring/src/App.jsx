function App() {

  let FoodItem = []//"Fruits", "Salad", "Diry Product", "Wheat Bread"

  if (FoodItem.length === 0) {
    return <h1>List is empty</h1>
  }

  return <>
    <h1>Health Food List</h1>

    <ul class="list-group">
      {FoodItem.map((item) => (<li class="list-group-item">{item}</li>))}

    </ul>
  </>

}


export default App;