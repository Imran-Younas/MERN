function AddTodo() {
  return (

    <div class="container text-center">

      <div class="row br-row">
        <div class="col-6"> <input type="text" placeholder="Enter Text here" /></div>
        <div class="col-4"><input type="date" /></div>
        <div class="col-2"> <button type="button" className="btn btn-success button-size">Add</button> </div>
      </div>
    </div>

  );
}

export default AddTodo;