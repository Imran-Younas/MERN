import styles from "./App.module.css"
import Display from "./components/Display";
import ButtonContiner from "./components/ButtonContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContiner></ButtonContiner>

    </div>
  );
}

export default App;