import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort.jsx";
import PizzaBlock from "../components/Pizza-block/import";
import PizzaSkeleton from "../components/Pizza-block/Pizza-skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryID > 0 ? `category=${categoryID}` : '';

    setIsLoading(true);
    fetch(
      `https://64cb5ecd700d50e3c705c989.mockapi.io/pizzas-item/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sortType]);

  return (
    <div class="container">
      <div className="content__top">
        <Categories
          value={categoryID}
          onClickCategoty={(id) => setCategoryID(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((pizzaObj) => (
              <PizzaBlock key={pizzaObj.id} {...pizzaObj} />
            ))}
      </div>
    </div>
  );
};

export default Home;
