import { Request, Response } from "express";
import { hashPassword } from "../util/helper";
import { IUser, User } from "../models/mongoose/User";
import { matchedData, validationResult } from "express-validator";
import { UserIdParams } from "../types/users";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const getUserById = async (
  req: Request<UserIdParams, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const deleteUser = async (
  req: Request<UserIdParams, {}, {}>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.send(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const updateUser = async (
  req: Request<UserIdParams, {}, IUser>,
  res: Response
) => {
  const { id } = req.params;
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  try {
    const updatedUser = User.findByIdAndUpdate(id, data, { new: true });
    return res.status(201).send(updatedUser);
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const createUser = async (
  req: Request<{}, {}, IUser>,
  res: Response
) => {
  console.log("/api/user POST method");
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  const newUser = new User(data);
  console.log(newUser);
  try {
    const savedUser = await newUser.save();
    return res.status(201).send(savedUser);
  } catch (err) {
    return res.sendStatus(400);
  }
};
