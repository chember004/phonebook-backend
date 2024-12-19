import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
} from "../handlers/users";
import { userValidationSchema } from "../util/validator";
import { checkSchema } from "express-validator";

const router = Router();

//Get all /api/users
router.get("/", getUsers);
//Get by id /api/users/1
router.get("/:id", getUserById);
// create /api/users
router.post("/", checkSchema(userValidationSchema), createUser);
// update /api/users
router.put("/:id", checkSchema(userValidationSchema), updateUser);

export default router;
