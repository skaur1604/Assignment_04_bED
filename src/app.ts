import express from "express";
import loanRouter from "./api/v1/routes/loanRoutes";
import errorHandler from './api/v1/middleware/errorHandler';

const app = express();

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount loan routes
app.use("/api/v1/loans", loanRouter);

// Health check
app.get("/health", (req, res) => res.status(200).send("OK"));

// Global error handler (optional)
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));


export default app;

