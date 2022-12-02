export interface Day01Interface {}

const Day01: React.FC<Day01Interface> = () => {
  const gifts: string[] = ["Medias", "Rompecabezas", "Remeras"];

  return (
    <>
      <h1>Regalos:</h1>
      <ul>
        {gifts.map((gift) => (
          <li>{gift}</li>
        ))}
      </ul>
    </>
  );
};

export default Day01;
