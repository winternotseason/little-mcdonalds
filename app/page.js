
import ImageSlideshow from "@/components/main-header/images/image-slideshow";
import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
      </header>
      <main>
       
      </main>
    </>
  );
}
