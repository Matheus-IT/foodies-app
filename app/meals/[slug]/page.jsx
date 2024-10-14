import Image from "next/image";
import cls from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import { Suspense } from "react";

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={cls.header}>
        <div className={cls.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={cls.headerText}>
          <Suspense fallback={<Skeleton width={200} height={40} />}>
            <h1>{meal.title}</h1>
          </Suspense>
          <p className={cls.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={cls.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cls.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
