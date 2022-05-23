import "./BookList.css";
import Book from "./Book";

export default function BookList({ data }) {
  return (
    <section>
      <div className="container bookList">
        {data.map(({ image, id, title, author, description, published }) => (
          <Book
            key={id}
            image={image}
            title={title}
            author={author}
            description={description}
            published={published}
          />
        ))}
      </div>
    </section>
  );
}
