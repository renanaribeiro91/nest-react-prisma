Project: User Service
This project implements a user service using Node.js with Nest.js in the backend and ReactJS in the frontend. The service allows performing basic CRUD (Create, Read, Update, Delete) operations to manipulate user information.

Prerequisites
Before getting started with the project, make sure you have the following prerequisites installed on your machine:

Node.js
npm (or yarn)
Docker (optional, only if you want to use a MySQL database)
Setup
Follow the steps below to set up the project on your machine:

Clone the project repository:
bash
Copy code
git clone <repository-link>
Install project dependencies:
bash
Copy code
cd backend && npm install
bash
Copy code
cd frontend && npm install
Configure environment variables:
In the backend directory, create a .env file and define the following environment variables:
makefile
Copy code
PORT=3000
DATABASE_URL=<DATABASE_URL>
In the frontend directory, create a .env file and define the following environment variable:
arduino
Copy code
REACT_APP_BACKEND_URL=http://localhost:3000
Running the Project
Follow the steps below to run the project:

Start the backend server:
bash
Copy code
cd backend && compose:build: docker-compose up --build && compose:start: docker-compose up
Start the frontend server:
bash
Copy code
cd frontend && npm start
The frontend server will start, and you can access the application at http://localhost:3001.

Database (optional)
If you want to use a MySQL database, you can use Docker Compose to set up the development environment. Make sure you have Docker installed and follow the steps below:

In the project root directory, run the following command to start the MySQL container:
bash

Testing
To run the backend unit tests, use the following command:

bash
Copy code
cd backend && npm run test
The unit tests will verify the correct behavior of the CRUD functions, as well as other additional functionalities.

API Endpoints
The API provides the following endpoints:

POST /users: Create a new user.
GET /users: Retrieve all users.
GET /users/:id: Retrieve a specific user by ID.
PUT /users/:id: Update an existing user.

DELETE /users/:id: Delete an existing user.
Author
Renan Ribeiro

License
This project is licensed under the MIT License.
