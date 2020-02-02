import Recipe from "./recipe";

const Menu = ({ recipies }) => (
  <article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
    <div className="recipies">
      {recipies.map((recipie, i) => (
        <Recipe key={i} {...recipie} />
      ))}
    </div>
  </article>
);

export default Menu;
