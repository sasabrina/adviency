import { useContext } from "react";
import { Form, Gifts } from "./components";
import { GiftContext } from "./context";
import styles from "./styles.module.scss";

function App() {
  const { giftsState, handleGiftSubmit } = useContext(GiftContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Regalos</h1>

      <Form submit={handleGiftSubmit} />
      <Gifts items={giftsState} />
    </div>
  );
}

export default App;
