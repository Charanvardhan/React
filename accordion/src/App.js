import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          key={index}
          faq={faq}
          count={index + 1}
          // open={open}
          // setOpen={onClickHandler}
        />
      ))}
    </div>
  );
}

function Item({ faq, count }) {
  const [open, setOpen] = useState(false);

  function onClickHandler() {
    setOpen((open) => !open);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={onClickHandler}>
      <p className="number">{count < 10 ? `0${count}` : { count }}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{open ? "-" : "+"}</p>
      {/* <p className="content-box">{open ? faq.text : ""}</p> */}
      {open && <div className="content-box">{faq.text}</div>}
    </div>
  );
}
