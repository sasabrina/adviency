import { useState } from "react";
import { Form, Gifts } from "./components";
import styles from "./styles.module.scss";

export interface Day03Interface {}

const Day03: React.FC<Day03Interface> = () => {
  const [gifts, setGifts] = useState<string[]>([
    "Medias",
    "Rompecabezas",
    "Remeras",
  ]);

  const handleFormSubmit = (gift: string): void => {
    setGifts([...gifts, gift]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Regalos</h1>

      <Form submit={handleFormSubmit} />

      <Gifts items={gifts} />
    </div>
  );
};

export default Day03;
