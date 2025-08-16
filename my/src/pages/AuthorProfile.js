import { authors } from "../DummyData/dummyData";
import "../style.css";

export default function AuthorProfile({ authorId, onBack }) {
  const author = authors.find((a) => a.id === authorId);

  if (!author) return <p className="text-center mt-10">Author not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold">{author.name}</h1>
      <p className="text-gray-600 mt-2 italic">"{author.article.title}"</p>

      <button
        onClick={onBack}
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Back to Articles
      </button>
    </div>
  );
}
