# **Quiz API Documentation**

## **Base URL**

`http://localhost:5000`

## **Endpoints**

### **1\. User Authentication**

#### **Login**

- **Endpoint:** `POST /login`
- **Description:** Authenticates a user and returns a token, user ID, and username.
- **Request Body:**

  `{ "username": "admin", "password": "password123" }`

- **Response (Success - 200):**

  `{ "success": true, "userId": 1, "username": "admin", "token": "a1b2c3d4e5f6g7h8i9j0" }`

- **Response (Unauthorized - 401):**

  `{ "success": false, "message": "Invalid credentials" }`

---

### **2\. Fetch All Quiz Questions**

#### **Get Questions**

- **Endpoint:** `GET /api/questions`
- **Description:** Returns a list of all quiz questions (without correct answers).
- **Response (Success - 200):**

  `{ "success": true, "questions": [ { "id": 1, "question": "What is React?", "options": ["Library", "Framework", "Language", "Tool"] }, { "id": 2, "question": "Which hook is used for state management in functional components?", "options": ["useEffect", "useState", "useReducer", "useMemo"] } ] }`

---

### **3\. Submit Quiz & Get Score**

#### **Submit Answers**

- **Endpoint:** `POST /api/submit`
- **Description:** Submits quiz answers and calculates the score.
- **Request Body:**

  `{ "userId": 1, "answers": { "1": "Library", "2": "useState", "3": "v6" } }`

- **Response (Success - 200):**

  `{ "success": true, "score": 3, "message": "Quiz submitted successfully!" }`

---

### **4\. Fetch User Quiz Result**

#### **Get User Result**

- **Endpoint:** `GET /api/result/:userId`
- **Description:** Retrieves the quiz score of a specific user.
- **Request Example:**

  `GET /api/result/1`

- **Response (Success - 200):**

  `{ "success": true, "userId": 1, "score": 3 }`

- **Response (Not Found - 404):**

  `{ "success": false, "message": "Result not found" }`
