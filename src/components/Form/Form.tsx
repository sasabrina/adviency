import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles.module.scss";
import { Gift } from "@/models";

export interface FormInterface {
  submit: (gift: Gift) => void;
}

type FormValues = {
  name: Gift["name"];
  quantity: Gift["quantity"];
  image: Gift["image"];
};

const Form: React.FC<FormInterface> = ({ submit }) => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    quantity: 0,
    image: "",
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, name: e.target.value });
  };

  const handleQttyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, quantity: Number(e.target.value) });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, image: e.target.value });
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
        name="name"
        value={values.name || ""}
        onChange={handleNameChange}
        placeholder="Agrega regalos a la lista..."
      />

      <input
        type="text"
        name="image"
        value={values.image || ""}
        onChange={handleImageChange}
        placeholder="https://image..."
      />

      <div className={styles.formGroup}>
        <input
          type="number"
          name="quantity"
          min={0}
          value={values.quantity || 0}
          onChange={handleQttyChange}
        />
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default Form;
