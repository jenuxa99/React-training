import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort.jsx";
import PizzaBlock from "../components/Pizza-block/import";
import PizzaSkeleton from "../components/Pizza-block/Pizza-skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://64cb5ecd700d50e3c705c989.mockapi.io/pizzas-item/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((pizzaObj) => (
              <PizzaBlock key={pizzaObj.id} {...pizzaObj} />
            ))}
      </div>
    </>
  );
};

export default Home;