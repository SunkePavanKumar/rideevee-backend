import express from "express";
import generateToken from "./utils/generateToken.js";
import {
  addUsers,
  getUsers,
  specifiedUser,
  deleteUser,
  updateUser,
} from "./controllers/userController.js";
import authenticateToken from "./middlewares/authenticationToken.js";

const router = express.Router();

router.route("/users").get(authenticateToken, getUsers);
router.route("/users/:id").get(authenticateToken, specifiedUser);
router.route("/users").post(authenticateToken, addUsers);
router.route("/users/:id").put(authenticateToken, updateUser);
router.route("/users/:id").delete(authenticateToken, deleteUser);
router.route("/generateToken").post(generateToken);

export default router;
