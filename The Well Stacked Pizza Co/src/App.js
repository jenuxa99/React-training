import React from "react";
import "./CSS/App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import NotFound from "./components/NotFoundBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
      <NotFound />
    </div>
  );
}

export default App;

// 1. Cheese Pizza / Пицца с сыром
// 2. Pepperoni Pizza / Пицца с пепперони
// 3. Sausage Pizza / Пицца с колбасой
// 4. Mushroom Pizza / Грибная пицца
// 5. Double Pepperoni Pizza / Пицца с двойным пепперони
// 6. Shrimp Pizza / Пицца с креветками
// 7. Seafood Pizza / Морская пицца
// 8. Vegetarian Pizza / Вегетарианская пицца
// 9. Meat Feast Pizza / Пицца с множеством видов мяса
// 10. Anchovy Pizza / Пицца с анчоусами
// 11. Barbecue Pizza / Барбекю пицца
// 12. Bacon Pizza / Пицца с беконом
// 13. Ham Pizza / Пицца с ветчиной
// 14. Pineapple Pizza / Пицца с ананасами
// 15. Supreme Pizza / Пицца "Суприм"(с различными начинками)
// 16. Meatball Pizza / Пицца с фрикадельками
// 17. Chicken Pizza / Пицца с курицей
// 18. Buffalo Wing Pizza / Пицца с крылышками буффало
// 19. Cheesebread / Сырный хлеб
// 20. Garlic Bread / Чесночный хлеб
