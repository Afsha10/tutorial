import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>;
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg"
    alt="Iron Flame"
  />
);
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
