import MainItem from "./main-item";
import classes from "./main-grid.module.css";

export default function MainGrid({burgers}) {
  return (
    <ul className={classes.meals}>
      {burgers.map((burger) => (
        <li key={burger.id}>
          <MainItem {...burger} />
        </li>
      ))}
    </ul>
  );
}
