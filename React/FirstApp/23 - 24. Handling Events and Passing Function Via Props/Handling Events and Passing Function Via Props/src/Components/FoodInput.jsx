import styles from './FoodInput.module.css'
const FoodInput = ({ handleKeyDown }) => {


  return <input type="text" placeholder='Enter new Item' className={styles.foodInput}
    onKeyDown={handleKeyDown}
  />
}

export default FoodInput;