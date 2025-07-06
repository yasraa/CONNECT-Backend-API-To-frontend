@@ -0,0 +1,58 @@
### 🚀 Features

* React frontend (`localhost:3001`)
* Express backend (`localhost:3000`)
* Uses `fetch()` to get data from an API
* Shows user info like name, email, phone, company, etc.


### 📁 Project Structure

```
/backend      → Express server and API route
/frontend     → React app to display user data
```

### 🛠 How to Use

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/user-api-app.git
cd user-api-app
```

#### 2. Start the Backend Server

```bash
cd backend
npm install
node index.js
```

Server runs at: `http://localhost:3000`

---

#### 3. Start the Frontend (React)

In a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3001`

It automatically fetches data from the backend and displays it.

---

### 🔗 API Endpoint Used

```
GET http://localhost:3000/api/user
```
