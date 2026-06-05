import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { IUserDTO } from "../interfaces/user.interface";
import { StatusCodes } from "../enums/status-codes.enum";

class UserController {
    public async getAll(_req: Request, res: Response): Promise<void> {
        const data = await userService.getAllUsers();
        res.status(StatusCodes.OK).json(data);
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const id = req.params.id as string;
        const data = await userService.getUserById(id);
        res.status(StatusCodes.OK).json(data);
    }

    public async create(req: Request, res: Response): Promise<void> {
        const user = req.body as IUserDTO;
        const data = await userService.createUser(user);
        res.status(StatusCodes.CREATED).json(data);
    }
}

export const userController = new UserController();
