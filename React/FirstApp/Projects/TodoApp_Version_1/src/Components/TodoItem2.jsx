function TodoItem2() {

  let itemName = 'Go to College';
  let itemDate = '10/04/2023';

  return (

    <div className="container">

      <div class="row br-row">
        <div class="col-6">{itemName}</div>
        <div class="col-4"> {itemDate} </div>
        <div class="col-2"> <button type="button" className="btn btn-danger button-size">Delete</button> </div>
      </div>

    </div>

  );
}

export default TodoItem2;