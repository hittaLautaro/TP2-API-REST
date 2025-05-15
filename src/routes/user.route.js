import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.allUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.postUser);
router.patch("/:id", userController.patchUser);
router.delete("/:id", userController.deleteUser);

export default router;
