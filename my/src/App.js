import { useState } from "react";
import ArticlePage from "./pages/ArticlePage";
import AuthorProfile from "./pages/AuthorProfile";
import "./style.css";


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

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "article" && (
        <ArticlePage
          onAuthorClick={handleAuthorClick}
          pageNumber={articlePageNumber}
          setPageNumber={setArticlePageNumber}
        />
      )}
      {currentPage === "author" && (
        <AuthorProfile authorId={selectedAuthor} onBack={goBack} />
      )}
    </div>
  );
}
