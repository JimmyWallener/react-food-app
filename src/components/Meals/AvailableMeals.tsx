import { DUMMY_MEALS } from '../../MockData/dummy_db_data';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

interface MealsObject {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvailableMeals = (): JSX.Element => {
  return (
    <section className='max-w-4xl w-[90%] mt-8 m-auto'>
      <Card>
        <ul className='list-none m-0 p-0 '>
          {DUMMY_MEALS.map(
            (meal: MealsObject): JSX.Element => (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                desc={meal.description}
                price={meal.price}
              />
            )
          )}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
