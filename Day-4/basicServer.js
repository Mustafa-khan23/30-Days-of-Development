const express = require("express"); //require express
const app = express();

//middleware
app.use((req, res, next) => {
  console.log("Middleware invoked!");
  next();
});

//routes
app.get("/", (req, res, next) => {
  res.send("Hello From root!");
});

app.get("/user", (req, res, next) => {
  res.send("Hello from user!");
  next();
});

//error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal server error!" });
});

//listen
const port = 3000;
app.listen(process.env.port || port, () => {
  console.log(`server is listening on -> http://localhost:${port}`);
});
