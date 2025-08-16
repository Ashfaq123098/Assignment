export const authors = [
  {
    id: 1,
    name: "John Smith",
    article: {
      title: "Understanding React Basics",
      content: "React makes UI development easier by using reusable components...",
    },
    comments: [
      { id: 101, text: "Great explanation!", author: "Alice" },
      { id: 102, text: "Very useful post!", author: "Bob" },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    article: {
      title: "Advanced Hooks in React",
      content: "Hooks like useReducer and useContext allow complex state...",
    },
    comments: [
      { id: 201, text: "Hooks are game changers!", author: "Tom" },
      { id: 202, text: "Nice article.", author: "Emma" },
    ],
  },
  {
    id: 3,
    name: "Michael Brown",
    article: {
      title: "React Performance Tips",
      content: "Use memoization, lazy loading, and virtualization to speed up apps...",
    },
    comments: [{ id: 301, text: "Thanks for the tips!", author: "Chris" }],
  },
  {
    id: 4,
    name: "Emily Davis",
    article: {
      title: "State Management in React",
      content: "From useState to Redux, learn when to use which tool...",
    },
    comments: [
      { id: 401, text: "Redux felt complex, but this helped!", author: "Nina" },
    ],
  },
  {
    id: 5,
    name: "David Wilson",
    article: {
      title: "React Testing Made Simple",
      content: "Jest and React Testing Library make testing components easy...",
    },
    comments: [
      { id: 501, text: "Testing feels less scary now!", author: "Sam" },
    ],
  },
];
