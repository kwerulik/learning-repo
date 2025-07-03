

import PropTypes from "prop-types";

function List({ category = "Category", items = [] }) {
  const itemList = [...items];
  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  itemList.sort((a, b) => a.calories - b.calories);

  // const lowCalFruits = fruits.filter((fruit) => fruit.calories <= 100);

  // const listItem = lowCalFruits.map((lowCalfruit) => (
  //   <li key={lowCalfruit.name}>
  //     {lowCalfruit.name}: &nbsp; <b>{lowCalfruit.calories}</b>
  //   </li>
  // ));

  const listItem = itemList.map((item) => (
    <li key={item.name}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  // const listItem = highCalFruits.map((highCalfruit) => (
  //   <li key={highCalfruit.name}>
  //     {highCalfruit.name}: &nbsp; <b>{highCalfruit.calories}</b>
  //   </li>
  // ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItem}</ol>
    </>
  );
  
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

export default List