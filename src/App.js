import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import BookList from "./components/content/BookList";
import Footer from "./components/footer/Footer";
import Loading from "./image/Loading.gif";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const API = "https://fakerapi.it/api/v1/books";

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data.data))
      .catch((err) => setData(null));
  }, []);

  return (
    <>
      {data == null ? (
        <div className="app_loading">
          <img src={Loading} alt="loading" />
        </div>
      ) : (
        <div className="app">
          <Header />
          <BookList data={data} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
