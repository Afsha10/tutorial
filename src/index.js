import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="./images/book-1.jpg" alt="Iron Flame" />;
const Title = () => <h2>Iron Flame</h2>;
const Author = () => {
  return <h4>Rebecca Yarros</h4>;
};

const Person = () => <h2>Madam Marie Curie</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;
