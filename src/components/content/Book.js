import "./Book.css";
import Button from "@mui/material/Button";

export default function Book({ image, title, author, description, published }) {
  let descriptionOptimized = description;

  if (descriptionOptimized.length > 40) {
    descriptionOptimized = descriptionOptimized.substring(0, 40) + "[...]";
  }

  return (
    <div className="book">
      <div className="book_image">
        <img alt="imagem" src={image} />
      </div>
      <div className="book_info">
        <h5>{title}</h5>
        <p>{author}</p>
        <p>{descriptionOptimized}</p>
      </div>
      <div className="book_button">
        <Button variant="outlined">Gênero</Button>
        <p>{published}</p>
      </div>
    </div>
  );
}
