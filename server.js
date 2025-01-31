const express = require("express");
const crypto = require("crypto");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const users = [
  { id: 1, username: "admin", password: "password123" },
  { id: 2, username: "user", password: "user123" },
]
const questions = [
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: "Library",
  },
  {
    id: 2,
    question: "Which hook is used for state management in functional components?",
    options: ["useEffect", "useState", "useReducer", "useMemo"],
    answer: "useState",
  },
  {
    id: 3,
    question: "Which React Router version introduced useRoutes hook?",
    options: ["v4", "v5", "v6", "v7"],
    answer: "v6",
  },
  {
    id: 4,
    question: "What is JSX?",
    options: [
      "A JavaScript syntax extension",
      "A templating engine",
      "A new programming language",
      "A CSS preprocessor",
    ],
    answer: "A JavaScript syntax extension",
  },
  {
    id: 5,
    question: "Which method is used to update the state in a class component?",
    options: ["setState", "updateState", "changeState", "modifyState"],
    answer: "setState",
  },
  {
    id: 6,
    question: "What is the purpose of useEffect in React?",
    options: [
      "To manage state",
      "To perform side effects in functional components",
      "To create a new component",
      "To handle user input",
    ],
    answer: "To perform side effects in functional components",
  },
  {
    id: 7,
    question: "Which of the following is NOT a built-in React hook?",
    options: ["useRef", "useLayoutEffect", "useContext", "useFetch"],
    answer: "useFetch",
  },
  {
    id: 8,
    question: "How do you pass data from a parent to a child component?",
    options: ["Using state", "Using props", "Using Redux", "Using context"],
    answer: "Using props",
  },
  {
    id: 9,
    question: "What is the default behavior of useEffect without a dependency array?",
    options: [
      "Runs only once after the component mounts",
      "Runs on every render",
      "Never runs",
      "Runs only when the component unmounts",
    ],
    answer: "Runs on every render",
  },
  {
    id: 10,
    question: "Which of the following statements about React keys is true?",
    options: [
      "Keys help React identify which items have changed, are added, or removed",
      "Keys are required for all React components",
      "Keys must always be globally unique",
      "Keys improve performance by caching components",
    ],
    answer: "Keys help React identify which items have changed, are added, or removed",
  },
  {
    id: 11,
    question: "What is the purpose of React.Fragment?",
    options: [
      "To wrap multiple elements without adding extra nodes to the DOM",
      "To create reusable components",
      "To manage global state",
      "To optimize React performance",
    ],
    answer: "To wrap multiple elements without adding extra nodes to the DOM",
  },
  {
    id: 12,
    question: "What does useRef return?",
    options: ["A function", "A mutable object", "A state variable", "A React component"],
    answer: "A mutable object",
  },
  {
    id: 13,
    question: "What is React.memo used for?",
    options: [
      "To memoize expensive calculations",
      "To prevent unnecessary re-renders of functional components",
      "To create a Redux store",
      "To manage API calls",
    ],
    answer: "To prevent unnecessary re-renders of functional components",
  }
];


;

// Generate a random token
const generateToken = () => crypto.randomBytes(16).toString("hex");

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = generateToken();
    res.json({ success: true, userId: user.id, username: user.username, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});
// Store user results
let userResults = {};

// **1. Fetch All Questions**
app.get("/api/questions", (req, res) => {
  const formattedQuestions = questions.map(({ answer, ...rest }) => rest); // Remove correct answers
  res.json({ success: true, questions: formattedQuestions });
});

// **2. Submit Quiz & Get Score**
app.post("/api/submit", (req, res) => {
  const { userId, answers } = req.body;
  let score = 0;

  questions.forEach((q, index) => {
    if (answers[q.id] === q.answer) {
      score++;
    }
  });

  userResults[userId] = score;
  res.json({ success: true, score, message: "Quiz submitted successfully!" });
});

// **3. Get User Result**
app.get("/api/result/:userId", (req, res) => {
  const { userId } = req.params;
  const score = userResults[userId];

  if (score !== undefined) {
    res.json({ success: true, userId, score });
  } else {
    res.status(404).json({ success: false, message: "Result not found" });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
