import { useState } from "react";
import "./index.css";

const initialMembers = [
  { id: "u1", name: "You", avatar: "🛒" },
  { id: "u2", name: "Bob", avatar: "🥖" },
  { id: "u3", name: "Alice", avatar: "🙂" },
];

const initialItems = [
  {
    id: "i1",
    name: "Milk",
    qty: 2,
    category: "Dairy",
    assignedTo: "u1", // Alice
    purchased: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "i2",
    name: "Bread",
    qty: 1,
    category: "Bakery",
    assignedTo: "u3", // You
    purchased: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "i3",
    name: "Apples",
    qty: 6,
    category: "Produce",
    assignedTo: "u2", // Bob
    purchased: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "i4",
    name: "Paper Towels",
    qty: 1,
    category: "produce",
    assignedTo: "u3", // You
    purchased: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

const itemCategory = ["Dairy", "produce", "Bakery"];

export default function App() {
  return (
    <div className="main">
      <SharedShoppingList />
    </div>
  );
}

function SharedShoppingList() {
  const [items, setItems] = useState([...initialItems]);
  const members = initialMembers;
  //   const items = initialItems;
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function togglePurchase(item) {
    console.log("toggled");
    setItems((items) =>
      items.map((cur) =>
        cur.id === item.id ? { ...cur, purchased: !cur.purchased } : cur
      )
    );
  }

  return (
    <div>
      <h1>SharedShoppingList</h1>
      <div>
        <span>
          <b>Members : </b>
        </span>
        {members.map((member) => (
          <RenderMember member={member} key={member.id} />
        ))}
      </div>
      <div>
        <ItemForm addItems={handleAddItems} members={members} />
      </div>
      <div>{/* <RenderItem items={items} /> */}</div>
      <div>
        <RenderItems items={items} purchased={togglePurchase} />
      </div>
      <div>
        <h3>Purchased</h3>
        {items.map((item) =>
          item.purchased ? <Completed item={item} key={item.id} /> : null
        )}
      </div>
    </div>
  );
}

function RenderMember({ member }) {
  return <span>{member.avatar} </span>;
}

function ItemForm({ addItems, members }) {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [categorys, setCategory] = useState(null);
  const [who, setWho] = useState(null);

  function handleOnSubmit(e) {
    e.preventDefault();

    if (text === "" || quantity === 0 || !categorys || !who) {
      alert("one of the values is Not acceptable");
      return;
    }
    const memberId = members.filter((member) => member.name === who);
    console.log(memberId[0].id);
    const newItem = {
      id: `i${text.length}`,
      name: text,
      qty: quantity,
      category: categorys,
      assignedTo: memberId[0].id,
    };
    console.log(newItem);
    addItems(newItem);
    setText("");
    setQuantity(0);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={text}
        placeholder="add Item"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="Number"
        value={quantity}
        placeholder="QTY"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <select onClick={(e) => setWho(e.target.value)}>
        {initialMembers.map((member) => (
          <option value={member.name} key={member.id}>
            {member.name}
          </option>
        ))}
      </select>
      <select onClick={(e) => setCategory(e.target.value)}>
        {itemCategory.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
function RenderItems({ items, purchased }) {
  return (
    <>
      <div>
        <b>Item</b> <b>Category</b> <b>Assign</b>
      </div>
      {items.map((item) =>
        !item.purchased ? (
          <RenderItem item={item} key={item.id} changePurchased={purchased} />
        ) : null
      )}
    </>
  );
}

function RenderItem({ item, changePurchased }) {
  return (
    <div>
      <input
        type="checkbox"
        value={item.purchased}
        onClick={() => changePurchased(item)}
      />{" "}
      <span>
        {" "}
        {item.name} {item.category} {item.assignedTo}
      </span>
    </div>
  );
}

function Completed({ item }) {
  return (
    <div>
      <span>
        {" "}
        {item.name} {item.category} {item.assignedTo}
      </span>
    </div>
  );
}
