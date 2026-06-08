import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../enums/status-codes.enum";
import { IUserCreateDTO } from "../interfaces/user.interface";
import { authService } from "../services/auth.service";

class AuthController {
    public async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body as IUserCreateDTO;
            const data = await authService.signup(body);

            res.status(StatusCodes.CREATED).json(data);
        } catch (error) {
            next(error);
        }
    }

    public async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body as Pick<IUserCreateDTO, 'email' | 'password'>;
            const data = await authService.signIn(body);

            res.status(StatusCodes.OK).json(data);
        } catch (error) {
            next(error);
        }
    }
}

export const authController = new AuthController();
