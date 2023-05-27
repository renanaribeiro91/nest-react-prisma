# Project: User Service (Em construção - Project under construction)

This project implements a user service using Node.js with Nest.js in the backend and ReactJS in the frontend. The service allows performing basic CRUD (Create, Read, Update, Delete) operations to manipulate user information.

# API Endpoints

The API provides the following endpoints:

POST /users: Create a new user.
GET /users: Retrieve all users. (Accepts query parameters for name search)
GET /users/:id: Retrieve a specific user by ID.
PUT /users/:id: Update an existing user.
DELETE /users/:id: Delete an existing user.

# Author

Renan Ribeiro

## Prerequisites

Before getting started with the project, make sure you have the following prerequisites installed on your machine:

- Node.js
- npm (or yarn)
- Docker (optional, only if you want to use a MySQL database)

## Setup

Follow the steps below to set up the project on your machine:

1. Clone the project repository:
    ```
    git clone <repository-link>
    ```

2. Install project dependencies:
    - For the backend:
        ```bash
        cd backend && npm install
        ```

    - For the frontend:
        ```bash
        cd frontend && npm install
        ```

3. Configure environment variables:
    - In the backend directory, create a `.env` file and define the following environment variables:
        ```makefile
        PORT=3000
        DATABASE_URL=<DATABASE_URL>
        ```

    - In the frontend directory, create a `.env` file and define the following environment variable:
        ```arduino
        REACT_APP_BACKEND_URL=http://localhost:3000
        ```

## Running the Project

To run the project, follow the steps below:

1. Start the backend server:
    ```bash
    cd backend && docker-compose up --build && docker-compose up
    ```

2. Start the frontend server:
    ```bash
    cd frontend && npm start
    ```

   The frontend server will start, and you can access the application at http://localhost:3001.

## Database (optional)

If you want to use a MySQL database, you can use Docker Compose to set up the development environment. Make sure you have Docker installed and follow the steps below:

- In the project root directory, run the following command to start the MySQL container:
    ```bash
    docker-compose up
    ```

## Testing

To run the backend unit tests, use the following command:
```bash
cd backend && npm run test




