import express from "express";
import loanRouter from "./api/v1/routes/loanRoutes";
import userRouter from "./api/v1/routes/userRoutes";
import errorHandler from './api/v1/middleware/errorHandler';

const app = express();

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use("/api/v1/loans", loanRouter);
app.use("/api/v1/users", userRouter);  // <-- added users

// Health check
app.get("/health", (req, res) => res.status(200).send("OK"));

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.use(errorHandler);

export default app;

