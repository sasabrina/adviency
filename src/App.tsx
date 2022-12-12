import { useContext, useState } from "react";
import { Form, Gifts, Modal } from "./components";
import { GiftContext } from "./context";
import styles from "./styles.module.scss";

function App() {
  const { giftsState, handleGiftSubmit, handleOpenModal } =
    useContext(GiftContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Regalos</h1>

      <button className={styles.btnModal} onClick={handleOpenModal}>
        Agregar regalo
      </button>

      <Modal>
        <Form submit={handleGiftSubmit} />
      </Modal>

      {!giftsState.length ? (
        <p className={styles.noGiftMessage}>No hay regalos en la lista</p>
      ) : (
        <Gifts items={giftsState} />
      )}
    </div>
  );
}

export default App;
