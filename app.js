import express from "express";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.send("<h1>Hi Hello!</h1>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on http://localhost:3000");
});
