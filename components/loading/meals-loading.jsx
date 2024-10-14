import cls from "./meals-loading.module.css";

export default function MealsLoading() {
  return <h1 className={cls.loading}>Fetching meals...</h1>;
}
