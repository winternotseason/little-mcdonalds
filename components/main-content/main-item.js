import Link from "next/link";
import Image from "next/image";
import classes from "./main-item.module.css";

export default function MealItem({ title, en_title, slug, image }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{en_title}</p>
      </div>
    </article>
  );
}
