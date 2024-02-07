# RideEvee Backend

This is a Node.js and Express.js backend application for CRUD operations on a MongoDB database for a User resource. It includes authentication middleware and Jest tests.

## Getting Started

### Prerequisites

- Node.js: [Install Node.js](https://nodejs.org/)
- MongoDB: [Install MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SunkePavanKumar/rideevee-backend.git
   ```

2. Install dependencies:

   ```bash
   cd Rideevee
   npm install
   ```

3. Set up environment variables:

   ```bash
   PORT = 8000
   DB_URL = "Your Mongo connection string"
   JWT_SECERT_KEY = "Strong key"
   ```

4. Running the Application
   ```bash
   npm start
   npm run dev
   npm jest
   ```

The server will run on http://localhost:8000.

5. API Endpoints

```bash
GET /users: Returns a list of all users.
GET /users/:id: Returns the user with the specified ID.
POST /users: Creates a new user with the specified data.
PUT /users/:id: Updates the user with the specified ID with the new data.
DELETE /users/:id: Deletes the user with the specified ID
```
