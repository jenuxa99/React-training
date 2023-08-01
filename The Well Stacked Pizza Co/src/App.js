import logo from './logo.svg';
import './CSS/App.css';
import Header from './components/Header.jsx';
import Categories from './components/Categories';
import Sort from './components/Sort.jsx';
import PizzaBlock from './components/Pizza-block';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Пицца с сыром" price="399" />
            <PizzaBlock title="Пицца с пепперони" price="499" />
            <PizzaBlock title="Пицца с колбасой" price="499" />
            <PizzaBlock title="Грибная пицца" price="399" />
            <PizzaBlock title="Пицца с двойным пепперони" price="599" />
            <PizzaBlock title="Пицца с креветками" price="699" />
            <PizzaBlock title="Морская пицца" price="799" />
            <PizzaBlock title="Вегетарианская пицца" price="499" />
            <PizzaBlock title="Пицца с множеством видов мяса" price="799" />
            <PizzaBlock title="Пицца с анчоусами" price="499" />
            <PizzaBlock title="Барбекю пицца" price="599" />
            <PizzaBlock title="Пицца с беконом" price="499" />
            <PizzaBlock title="Пицца с ветчиной" price="599" />
            <PizzaBlock title="Пицца с ананасами" price="499" />
            <PizzaBlock title="Пицца Суприм" price="899" />
            <PizzaBlock title="Пицца с фрикадельками" price="599" />
            <PizzaBlock title="Пицца с курицей" price="499" />
            <PizzaBlock title="Пицца с крылышками буффало" price="599" />
            <PizzaBlock title="Сырный хлеб" price="99" />
            <PizzaBlock title="Чесночный хлеб" price="99" />
          </div>
        </div>
      </div>
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