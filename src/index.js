import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Rebecca Yarros",
    title: "Iron Flame",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const someValue = "shakeAndBake"
  const displayValue = () => {
    console.log(someValue);
  }

  function getBook(id) {
      books.find((book) => book.id === id)
  }

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} getBook={getBook} />;
      })}
    </section>
  );
};



const Book = (props) => {
  const { img, title, author, id, getBook } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;
