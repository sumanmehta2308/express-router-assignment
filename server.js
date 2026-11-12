import express from "express";
import productRoutes from "./routes/productRoutes.js";
const app = express();
app.use("/", productRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
