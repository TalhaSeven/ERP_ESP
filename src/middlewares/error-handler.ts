import { Request, Response, NextFunction } from "express";
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    statusCode,
    message: err.message,
    stack: "🥞",
  });
}
