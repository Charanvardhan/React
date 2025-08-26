import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleShowAddFriend() {
    setshowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setshowAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
    setshowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectFrnd={selectFriend}
          setSelectFriend={handleSelectFriend}
        />
        {showAddFriend && <FormAddFriend addFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectFriend && (
        <FormSplitBill
          selectedFriend={selectFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FriendsList({ friends, setSelectFriend, selectFrnd }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          select={selectFrnd}
          set={setSelectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, set, select }) {
  const selected = select?.id === friend.id;

  return (
    <li className={selected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You owe {friend.name} {Math.abs(friend.balance)}﹩
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even ﹩0</p>}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name}'s owe you {Math.abs(friend.balance)}﹩
        </p>
      )}
      <Button onClick={() => set(friend)}>
        {" "}
        {selected ? "close" : "Select"}{" "}
      </Button>
    </li>
  );
}

function FormAddFriend({ addFriend }) {
  // Controlled elements\
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: crypto.randomUUID(),
    };
    addFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Frnd Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌃 Image Url </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const paidByFriend = bill ? bill - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !userExpense) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♂️ Your Expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />

      <label>👫 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={bill - userExpense} />

      <label>🤑 who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
