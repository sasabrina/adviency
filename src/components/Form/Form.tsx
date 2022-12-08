import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles.module.scss";
import { Gift } from "@/models";

export interface FormInterface {
  submit: (gift: Gift) => void;
}

type FormValues = {
  name: Gift["name"];
  quantity: Gift["quantity"];
};

const Form: React.FC<FormInterface> = ({ submit }) => {
  const [values, setValues] = useState<FormValues>({ name: "", quantity: 0 });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, name: e.target.value });
  };

  const handleQttyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, quantity: Number(e.target.value) });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values) submit(values);
    setValues({} as FormValues);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.name || ""}
        onChange={handleNameChange}
        placeholder="Agrega regalos a la lista..."
      />

      <input
        type="number"
        min={0}
        value={values.quantity || 0}
        onChange={handleQttyChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Form;
