import Link from "next/link";
import cls from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={cls.header}>
        <h1>
          Delicious meals created <span className={cls.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook yourself</p>
        <p className={cls.cta}>
          <Link href="/meals/share">Share you favorite recipe</Link>
        </p>
      </header>
      <main className={cls.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
