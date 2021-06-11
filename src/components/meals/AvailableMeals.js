import { useEffect, useState } from "react";
import Card from "../UI/card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./mealItem/MealItem";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-examples-c90fa-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await res.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setAvailableMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
