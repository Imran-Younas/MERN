function App() {

  let foodItem = ["Freash Fruit", "Salad", "Diry Milk", "Wheat Bread", "Sea Food", "Vegtable"]
  return <>
    <h1>Health Food List</h1>
    <ul class="list-group">
      {foodItem.map((item) => (<li key={item} class="list-group-item">{item}</li>))}

    </ul>
  </>
}

export default App;