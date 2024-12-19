import { Request, Response } from "express";

export const loginMongoose = (req: Request, res: Response) => {
  console.log(`/api/auth POST method`, req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
  // res.sendStatus(200);
};

export const logoutUser = (req: Request, res: Response) => {
  console.log("/api/auth/logout POST method", req.user);
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(400);
    res.status(200).json({ message: "Logged out", isLoggedOut: true });
  });
};

export const checkAuthStatusMongoose = (req: Request, res: Response) => {
  console.log("/api/auth/status GET method");
  console.log("current session", req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
};
