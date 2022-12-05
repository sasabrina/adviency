import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles.module.scss";

export interface FormInterface {
  submit: (gift: string) => void;
}

const Form: React.FC<FormInterface> = ({ submit }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) submit(value);
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Agrega más regalos a la listita..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Form;
