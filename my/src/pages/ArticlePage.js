import { authors } from "../DummyData/dummyData";
import ReactionButtons from "../components/ReactionButtons";
import Pagination from "../components/Pagination"; // ensure path correct

export default function ArticlePage({ onAuthorClick, pageNumber, setPageNumber }) {
  const perPage = 1; // একবারে একটি আর্টিকেল
  const start = (pageNumber - 1) * perPage;
  const currentAuthor = authors.slice(start, start + perPage)[0];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{currentAuthor.article.title}</h1>

      <button
        onClick={() => onAuthorClick(currentAuthor.id)}
        className="text-blue-600 underline mb-4 block"
      >
        {currentAuthor.name}
      </button>

      <p className="text-gray-700 mb-4">{currentAuthor.article.content}</p>

      <ReactionButtons />

      {/* Comments */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Comments</h2>
        {currentAuthor.comments.map((c) => (
          <div key={c.id} className="p-3 border rounded-md mt-2">
            <p className="font-medium">{c.author}</p>
            <p>{c.text}</p>
            <ReactionButtons />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={Math.ceil(authors.length / perPage)}
        currentPage={pageNumber}
        onPageChange={setPageNumber}
      />
    </div>
  );
}
