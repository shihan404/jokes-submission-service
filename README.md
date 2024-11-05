# submit-jokes-service

A microservice for submitting, retrieving, and managing jokes. Built with Express, this service provides endpoints for joke submission, retrieval of pending jokes, and joke deletion.

## Overview

**submit-jokes-service** is a backend service that allows users to submit jokes and provides moderation tools to review and manage submitted jokes. It includes a Swagger API for easy interaction and documentation.

## Features

- **Submit Jokes**: Endpoint to submit a new joke.
- **Retrieve Pending Jokes**: Retrieve a list of jokes pending moderation.
- **Delete Jokes**: Delete jokes by ID.

## Getting Started

### Prerequisites

- **Node.js** (v14.x.x or later)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
     git clone https://github.com/yourusername/submit-jokes-service.git
     cd submit-jokes-service
    ```
###Install dependencies

   ```bash
    npm install
    # or
    yarn install
   ```
###Configure environment variables
 ```bash
   MONGO_URI=mongodb://localhost:27017/jokesdb
   PORT=5005
   ```
###Run the development server
```bash
    npm run dev
    # or
    yarn dev
   ```

### API Documentation

The API includes the following endpoints:

- **POST /api/jokes/**: Submit a new joke.
  - **Body**: `{ "content": "Joke content", "type": "Category" }`
  - **Responses**:
    - `201`: Joke successfully created
    - `400`: Content and type are required
    - `500`: Internal server error

- **GET /api/jokes/pending**: Retrieve all pending jokes.
  - **Responses**:
    - `200`: List of pending jokes successfully retrieved
    - `500`: Internal server error

- **DELETE /api/jokes/{id}**: Delete a joke by ID.
  - **Parameters**: `id` (path parameter, required)
  - **Responses**:
    - `200`: Joke deleted successfully
    - `404`: Joke not found
    - `500`: Internal server error

- **GET /api/jokes/test**: Test route that returns a simple hello message.
  - **Responses**:
    - `200`: Returns `{"message": "Hello from the test route!"}`

The Swagger documentation for these endpoints can be accessed at `/api-docs` when the server is running.

### Tools and Technologies

This project leverages a variety of tools and technologies to support development, testing, and deployment.

#### AI Tools
- **ChatGPT**: Used for assistance in code generation, documentation, and troubleshooting.
- **Claude.ai**: Provides advanced AI capabilities for content generation and interaction.

#### Backend
- **Node.js**: JavaScript runtime environment for server-side code execution.
- **Express**: Web application framework for building RESTful APIs.
- **NestJS** (optional, if using in other services): A progressive Node.js framework for scalable and efficient backend services.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js, used for data management and schema validation.
- **JWT (JSON Web Token)**: Used for secure authentication and authorization.

#### Security
- **Helmet**: Middleware for securing HTTP headers.
- **Express Rate Limit**: Protects APIs by limiting repeated requests.
- **bcrypt.js**: For hashing passwords and securing sensitive data.

#### API Documentation
- **Swagger**: Provides interactive API documentation for easy testing and integration.

#### Development Tools
- **Nodemon**: Utility that automatically restarts the server on code changes.
- **ESLint**: Linter for identifying and fixing code issues.
- **Prettier**: Code formatter to maintain consistent code style.
- **Husky**: Git hooks manager to enforce checks before commits.

#### Environment Management
- **dotenv**: Loads environment variables from `.env` files, ensuring configurations are securely managed.

#### Database
- **MongoDB**: NoSQL database used for storing jokes and user data.
- **MySQL** (if applicable in other services): Relational database management system.

This combination of tools and technologies ensures a robust, secure, and scalable application architecture, suitable for modern web applications.
