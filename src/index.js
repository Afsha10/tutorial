import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import banana from "./books";
import Book from "./Book";

const BookList = () => {

  return (
    <section className="booklist">
      {banana.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;
