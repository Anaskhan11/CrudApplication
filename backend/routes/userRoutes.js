import express from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../Controller/userController.js"

const router = express.Router();

router.post("/AddUser", addUser)


router.get("/ShowAllUsers", getUsers)
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;