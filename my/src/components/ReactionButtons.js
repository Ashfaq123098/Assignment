import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function ReactionButtons() {
  const [reaction, setReaction] = useState(null);

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => setReaction(reaction === "like" ? null : "like")}
        className={`p-2 rounded-full ${
          reaction === "like" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        <ThumbsUp size={18} />
      </button>

      <button
        onClick={() => setReaction(reaction === "dislike" ? null : "dislike")}
        className={`p-2 rounded-full ${
          reaction === "dislike" ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        <ThumbsDown size={18} />
      </button>
    </div>
  );

}