import { Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError";


export const createLoan = (req: Request, res: Response) => {
  res.json({ message: "Loan created successfully" });
};

export const getLoanById = (req: Request, res: Response) => {
  res.json({ message: `Loan details for ID ${req.params.id}` });
};

export const updateLoan = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} updated successfully` });
};

export const deleteLoan = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} deleted successfully` });
};

export const getLoans = (req: Request, res: Response) => {
    throw new NotFoundError('Loans not found');
};