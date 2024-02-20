import styles from './FoodList.module.css'

const FoodList = ({ itemList }) => {

  return (
    <>
      <ul className="list-group">
        {
          itemList.map((item) => (
            <li className="list-group-item">{item}
              <button className={`${styles.button} btn btn-info`}
                onClick={() => { console.log(`${item} Added to cart`) }}>Buy</button></li>

          ))
        }

      </ul>
    </>
  )

}

export default FoodList; 