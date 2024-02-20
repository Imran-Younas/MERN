import styles from "./ButtonContainer.module.css"

const ButtonContiner = () => {

  let ButtonArray = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
    <div className={styles.buttonContainer}>
      {ButtonArray.map((buttons) => (
        <button className={styles.button}>{buttons}</button>

      ))}

    </div>
  );
}

export default ButtonContiner;