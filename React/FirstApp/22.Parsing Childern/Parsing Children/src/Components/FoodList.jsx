const FoodList = ({ itemList }) => {

  return (
    <>
      <ul className="list-group">
        {
          itemList.map((item) => (
            <li className="list-group-item">{item}</li>

          ))
        }

      </ul>
    </>
  )

}

export default FoodList; 