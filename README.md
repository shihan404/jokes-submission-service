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
