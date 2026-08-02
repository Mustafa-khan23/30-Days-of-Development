# Express.js Framework

## Introduction

Express.js is a minimal, fast, and flexible web framework for Node.js. It is distributed as an npm package and provides a thin layer of features to build web applications and APIs. Express simplifies handling HTTP requests, routing, middleware, and responses so you can focus on application logic.

## What is Express used for?

- **Routing:** Define URL endpoints and attach handlers.
- **Middleware:** Compose request-processing steps (authentication, parsing, logging).
- **Request/Response handling:** Provide helpers to read `req` data and send responses via `res`.
- **Error handling:** Centralized error middleware to catch and respond to failures.
- **Serving static files and templating:** Easily serve static assets and render views.

## Setting up a basic Express application

Install dependencies and create a simple server:

```bash
npm init -y
npm install express
```

Create `app.js`:

```javascript
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

Run the server:

```bash
node app.js
```

## Routing

Routing maps HTTP methods and paths to handler functions. Examples:

```javascript
app.get("/users", (req, res) => {
  /* list users */
});
app.post("/users", (req, res) => {
  /* create user */
});
app.get("/users/:id", (req, res) => {
  /* req.params.id */
});
```

- **Query parameters:** `req.query` (e.g., `/search?q=term`).
- **Route parameters:** `req.params` (e.g., `/users/:id`).

## Middleware

Middleware are functions that run during the request–response cycle. They can inspect/modify `req` and `res`, end the response, or call `next()` to pass control.

Built-in and common middleware:

```javascript
app.use(express.json()); // parse JSON bodies
app.use(express.static("public")); // serve static files

// custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

Order matters: middleware and routes are evaluated in the order they are added.

## Request and response handling

- `req` contains details about the incoming request: `req.params`, `req.query`, `req.body`, `req.headers`.
- `res` provides methods to send a response: `res.send()`, `res.json()`, `res.status()`, `res.redirect()`.

Example:

```javascript
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username) return res.status(400).json({ error: "username required" });
  // authenticate...
  res.json({ success: true });
});
```

## Error handling

Express treats middleware with four arguments as error handlers: `(err, req, res, next)`.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});
```

Throwing or passing an error to `next(err)` will skip regular middleware and route handlers and call error handlers.

## Tips and next steps

- Keep handlers small and move logic into separate modules.
- Use `express.Router()` to modularize routes.
- Add validation (e.g., `joi` or `express-validator`) and authentication middleware.
- Consider production concerns: logging, security headers (`helmet`), rate limiting, and graceful shutdown.

---
