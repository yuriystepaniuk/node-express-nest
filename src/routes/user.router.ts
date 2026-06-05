import { Router } from "express";
import { userController } from "../controlers/user.contoller";
import { UserValidator } from "../validators/user.validator";
import { commonMiddleware } from "../middlewares/common.midddlewares";

const router = Router();

router.get("/", userController.getAll);
router.post("/", commonMiddleware.validateBody(UserValidator.createUser), userController.create);
router.get("/:id", userController.getById);

export default router;
 