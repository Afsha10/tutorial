import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Rebecca Yarros",
  title: "Iron Flame",
  img: "./images/book-1.jpg"
}

const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;
