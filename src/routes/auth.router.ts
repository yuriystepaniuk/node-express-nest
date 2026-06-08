import { Router } from "express";
import { authController } from "../controlers/auth.contoller";
import { commonMiddleware } from "../middlewares/common.midddlewares";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.post("/signup", commonMiddleware.validateBody(UserValidator.createUser), authController.signUp);
router.post("/signin", commonMiddleware.validateBody(UserValidator.loginUser), authController.signIn);

export const authRouter = router;
