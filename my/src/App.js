import { useState } from "react";


export default function App() {
  const [currentPage, setCurrentPage] = useState("article"); // "article" | "author"
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [articlePageNumber, setArticlePageNumber] = useState(1); // pagination

  const handleAuthorClick = (id) => {
    setSelectedAuthor(id);
    setCurrentPage("author");
  };

  const goBack = () => {
    setCurrentPage("article");
    setSelectedAuthor(null);
  };

}
