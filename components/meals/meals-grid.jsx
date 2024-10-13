import MealItem from "./meal-item";
import cls from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={cls.meals}>
      {meals.map((m) => (
        <li key={m.id}>
          <MealItem {...m} />
        </li>
      ))}
    </ul>
  );
}
