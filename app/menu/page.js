import MainGrid from "@/components/main-content/main-grid";
import { getBurgers } from "@/lib/burgers";
import burgerHeader from "@/public/images/burgerheader.png";
import Image from "next/image";
import classes from "./page.module.css";

async function Burgers() {
  const burgers = await getBurgers();
  return <MainGrid burgers={burgers} />;
}
export default function MenuPage() {
  return (
    <>
      <header className={classes.header}>
        <Image src={burgerHeader} alt="burger header" />
        <div className={classes.headerContent}>
          <h2>버거</h2>
          <p>빅맥®에서 맥스파이시® 상하이버거까지,</p>
          <p>
            주문 즉시 바로 조리해 더욱 맛있는, 맥도날드의 다양한 버거를
            소개합니다.
          </p>
        </div>
      </header>
      <main>
        <Burgers />
      </main>
    </>
  );
}
