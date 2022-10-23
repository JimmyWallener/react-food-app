import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = (): JSX.Element => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
