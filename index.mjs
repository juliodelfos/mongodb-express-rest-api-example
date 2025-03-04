import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import books from "./routes/books.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /books routes
app.use("/books", books);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Error inesperado")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
