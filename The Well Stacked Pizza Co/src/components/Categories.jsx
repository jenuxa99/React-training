import React from "react";

function Categories() {
  const categArr = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeCategIndex, setActiveCategIndex] = React.useState(0);

  const activeCateg = (index) => {
    setActiveCategIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categArr.map((value, i) => (
          <li
            key={i}
            onClick={() => activeCateg(i)}
            className={activeCategIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
