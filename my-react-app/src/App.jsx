import { useState } from "react";
import data from "./data";
import List from "./components/List";

function App() {
  const [menu, setMenu] = useState(data);

  function clearItems() {
    setMenu([]);
  }

  function removeMe(id) {
    const finalItems = menu.filter((item) => item.id !== id);
    setMenu(finalItems);
  }

  return (
    <div className="section">
      <article>
        <h2 className="title">{menu.length} menu items</h2>
        {menu.map((item) => {
          console.log(item);
          return <List removeMe={removeMe} menu={menu} key={item.id} {...item} />;
        })}

        <button onClick={clearItems} className="btn">
          remove all
        </button>
      </article>
    </div>
  );
}

export default App;
