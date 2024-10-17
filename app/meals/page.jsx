import Link from "next/link";
import cls from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoading from "@/components/loading/meals-loading";

export const metadata = {
  title: "All meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function MealsFetcher() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
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
        <Suspense fallback={<MealsLoading />}>
          <MealsFetcher />
        </Suspense>
      </main>
    </>
  );
}
