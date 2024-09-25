**Code Editor Backend Documentation**
=====================================

### 1. Overview

The backend of the Code Editor application is built using Node.js with Express.js framework. It provides APIs for user authentication, code execution, and snippet management. The application uses MongoDB for data storage and Redis for caching.

# Code Editor Backend Documentation

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Key Components](#key-components)
4. [API Endpoints](#api-endpoints)
5. [WebSocket Implementation](#websocket-implementation)
6. [Code Execution](#code-execution)
7. [Database and Caching](#database-and-caching)
8. [Security Measures](#security-measures)
9. [Environment Configuration](#environment-configuration)
10. [Deployment](#deployment)

## Key Components

1. **server.js**: The main entry point of the application. It sets up the Express server, middleware, database connections, and WebSocket server.

2. **routes/**: Contains route handlers for different API endpoints.
   - `auth.js`: Handles user authentication (register, login, logout).
   - `execute.js`: Manages code execution requests.
   - `snippets.js`: Handles CRUD operations for code snippets.
   - `users.js`: Manages user profile updates.

3. **models/**: Defines MongoDB schemas for User and Snippet.

4. **middleware/auth.js**: Authentication middleware for protecting routes.

## API Endpoints

### Authentication
- POST `/api/auth/register`: Register a new user
- POST `/api/auth/login`: User login
- POST `/api/auth/refresh-token`: Refresh authentication token
- POST `/api/auth/logout`: User logout
- GET `/api/auth/user`: Get authenticated user information

### Snippets
- GET `/api/snippets`: Get all snippets for the authenticated user
- GET `/api/snippets/:id`: Get a specific snippet
- POST `/api/snippets`: Create a new snippet
- PUT `/api/snippets/:id`: Update an existing snippet
- DELETE `/api/snippets/:id`: Delete a snippet

### Code Execution
- POST `/api/execute`: Execute code and return the output

### User Profile
- PUT `/api/users/profile`: Update user profile information

## WebSocket Implementation

The application uses WebSockets for real-time code execution. The WebSocket server is set up in `server.js` and handles the following message types:
- `CODE_EXECUTION`: Executes the provided code
- `INPUT`: Handles user input during code execution
- `OUTPUT`: Sends execution output to the client
- `ERROR`: Sends execution errors to the client
- `EXECUTION_COMPLETE`: Notifies the client when execution is complete

## Code Execution

Code execution is handled in both `routes/execute.js` (for HTTP requests) and the WebSocket implementation in `server.js`. The process involves:
1. Creating a temporary file with the user's code
2. Executing the code using the appropriate interpreter (Python, Node.js, or Java)
3. Capturing and returning the output or errors
4. Cleaning up temporary files after execution

## Database and Caching

- MongoDB is used as the primary database for storing user information and code snippets.
- Redis is used for caching frequently accessed data, such as user snippets, to improve performance.

## Security Measures

1. Input validation and sanitization using `express-validator`
2. Password hashing using `bcryptjs`
3. JWT-based authentication with refresh tokens
4. Rate limiting to prevent abuse
5. HTTP security headers using `helmet`
6. CORS configuration to restrict access to trusted origins

## Environment Configuration

The application uses environment variables for configuration. Key variables include:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for signing JWTs
- `REFRESH_TOKEN_SECRET`: Secret for signing refresh tokens
- `PORT`: Server port (default: 5001)
- `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`: Redis configuration

## Overview

This backend application serves as the server-side component for a code editor web application. It provides APIs for user authentication, code snippet management, and real-time code execution. The application is built using Node.js with Express.js and incorporates various security measures and performance optimizations.

## Project Structure
code-editor-backend/
├── routes/
│ ├── auth.js
│ ├── execute.js
│ ├── snippets.js
│ └── users.js
├── models/
│ ├── User.js
│ └── Snippet.js
├── middleware/
│ └── auth.js
├── temp/
│ └── (temporary code files)
├── .env
├── package.json
└── server.js



### 2. Main Components

#### 2.1 Server Setup (server.js)

* Initializes the Express application
* Sets up middleware (CORS, body-parser, helmet for security, rate limiting)
* Connects to MongoDB and Redis
* Sets up WebSocket server for real-time code execution
* Defines routes for authentication, snippets, and code execution

#### 2.2 Authentication (routes/auth.js)

* Implements user registration, login, and token refresh
* Uses JWT for authentication
* Stores tokens in HTTP-only cookies for security

#### 2.3 Snippet Management (routes/snippets.js)

* CRUD operations for code snippets
* Implements caching using Redis for improved performance

#### 2.4 Code Execution (routes/execute.js and WebSocket implementation)

* Handles code execution requests
* Supports multiple programming languages (Python, JavaScript, Java)
* Uses child processes to run code securely
* Implements real-time output streaming using WebSockets

### 3. Implementation Process

#### 3.1 Server Initialization

* Load environment variables using dotenv
* Create Express app and HTTP server
* Set up WebSocket server
* Apply middleware (CORS, body-parser, helmet, rate limiting)
* Connect to MongoDB and Redis
* Set up routes

#### 3.2 Authentication Flow

* **User registration:**
	+ Validate input
	+ Check if user already exists
	+ Hash password
	+ Save user to database
	+ Generate JWT and refresh token
	+ Set tokens in HTTP-only cookies
* **User login:**
	+ Validate input
	+ Check user credentials
	+ Generate JWT and refresh token
	+ Set tokens in HTTP-only cookies
* **Token refresh:**
	+ Verify refresh token
	+ Generate new JWT
	+ Set new JWT in HTTP-only cookie

#### 3.3 Snippet Management

* **Create snippet:**
	+ Authenticate user
	+ Validate input
	+ Save snippet to database
	+ Invalidate cache
* **Retrieve snippets:**
	+ Authenticate user
	+ Check cache for snippets
	+ If not in cache, fetch from database and update cache
	+ Return snippets to user
* **Update snippet:**
	+ Authenticate user
	+ Validate input
	+ Update snippet in database
	+ Invalidate and update cache
* **Delete snippet:**
	+ Authenticate user
	+ Remove snippet from database
	+ Invalidate cache

#### 3.4 Code Execution

* **HTTP-based execution:**
	+ Receive code, language, and input
	+ Create temporary file with code
	+ Execute code using child process
	+ Capture output and errors
	+ Send response to client
	+ Clean up temporary files
* **WebSocket-based execution:**
	+ Establish WebSocket connection
	+ Receive code execution request
	+ Create temporary file with code
	+ Spawn child process for code execution
	+ Stream output and errors in real-time
	+ Handle user input
	+ Clean up resources on completion or error

### 4. Security Measures

* Use of helmet for setting secure HTTP headers
* Implementation of rate limiting to prevent abuse
* Secure storage of passwords using bcrypt
* Use of HTTP-only cookies for storing tokens
* Input validation and sanitization
* Execution of user code in isolated child processes

### 5. Performance Optimization

* Caching of snippets using Redis
* Use of WebSockets for real-time code execution updates
* Efficient database queries with proper indexing

### 6. Error Handling and Logging

* Consistent error response format across all routes
* Detailed error logging for debugging and monitoring
* Use of try-catch blocks for handling asynchronous operations

### 7. Future Improvements

* Implement more robust input sanitization for code execution
* Add support for more programming languages
* Implement user workspaces or projects
* Add collaboration features using WebSockets
* Improve caching strategies for better performance
