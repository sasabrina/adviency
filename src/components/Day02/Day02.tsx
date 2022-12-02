import styles from "./styles.module.scss";
export interface Day02Interface {}

const Day02: React.FC<Day02Interface> = () => {
  const gifts: string[] = ["Medias", "Rompecabezas", "Remeras"];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Regalos:</h1>

      <ul className={styles.giftsContainer}>
        {gifts.map((gift) => (
          <li>{gift}</li>
        ))}
      </ul>
    </div>
  );
};

export default Day02;
