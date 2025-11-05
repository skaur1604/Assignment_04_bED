import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/appError';

interface AuthOptions {
  roles: string[];
}

export const authorize = ({ roles }: AuthOptions) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) return next(new AppError('User not authenticated', 401));
    if (!roles.includes(user.role)) return next(new AppError('Access denied', 403));
    next();
  };
};
