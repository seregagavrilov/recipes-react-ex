import Ingredient from "./Ingredient";
const IngridientsList = ({ list }) => (
  <ul className="ingridients">
    {list.map((ingredient, i) => (
      <Ingredient key={i} {...ingredient} />
    ))}
  </ul>
);

export default IngridientsList;
