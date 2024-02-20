import { Button } from "bootstrap";

import styles from './ButtonContainer.module.css'

const ButtonContainer = () => {

  let ButtonArray = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9']

  return (

    <div className={styles.buttonContainer}>
      {ButtonArray.map((buttons) => (
        <button key={buttons} className={styles.button} >{buttons}</button>

      ))}

    </div>

  );
}


export default ButtonContainer;