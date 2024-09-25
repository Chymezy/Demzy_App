**Code Editor Backend Documentation**
=====================================

### 1. Overview

The backend of the Code Editor application is built using Node.js with Express.js framework. It provides APIs for user authentication, code execution, and snippet management. The application uses MongoDB for data storage and Redis for caching.

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
