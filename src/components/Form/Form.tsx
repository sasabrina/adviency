import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Gift } from "@/models";
import { GiftContext } from "@/context";
import styles from "@/styles.module.scss";

export interface FormInterface {
  submit: (gift: Gift) => void;
}

type FormValues = {
  name: Gift["name"];
  quantity: Gift["quantity"];
  image: Gift["image"];
  receiver: Gift["receiver"];
};

const INITIAL_VALUES: FormValues = {
  name: "",
  quantity: 0,
  image: "",
  receiver: "",
};

const Form: React.FC<FormInterface> = ({ submit }) => {
  const {
    handleCloseModal,
    giftsState,
    setEditGift,
    isEditing,
    handleIsEditing,
  } = useContext(GiftContext);

  const [values, setValues] = useState<FormValues>(
    giftsState.editGift ? giftsState.editGift : INITIAL_VALUES
  );

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, name: e.target.value });
  };

  const handleQttyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, quantity: Number(e.target.value) });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, image: e.target.value });
  };

  const handleReceiverChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, receiver: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values) submit(values);
    setValues(INITIAL_VALUES);
    setEditGift();
    handleCloseModal();
    handleIsEditing(false);
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

      <input
        type="text"
        name="receiver"
        value={values.receiver || ""}
        onChange={handleReceiverChange}
        placeholder="¿Para quién es?"
      />

      <div className={styles.formGroup}>
        <input
          type="number"
          name="quantity"
          min={0}
          value={values.quantity || 0}
          onChange={handleQttyChange}
        />
        <button type="submit">{isEditing ? "Guardar" : "Agregar"}</button>
      </div>
    </form>
  );
};

export default Form;
