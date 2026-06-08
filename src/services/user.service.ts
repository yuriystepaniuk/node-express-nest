import { userRepository } from "../repositories/user.repository"
import { IUserDTO, IUserUpdateDTO } from "../interfaces/user.interface";
import { passwordService } from "./password.service";
import { ApiError } from "../errors/api.error";
import { StatusCodes } from "../enums/status-codes.enum";

class UserService {
    public getAllUsers() {
        return userRepository.getAll();
    }

    public async getById(id: string) {
        const user = await userRepository.getById(id);

        if (!user) {
            throw new ApiError('User not found', StatusCodes.NOT_FOUND);
        }

        return user;
    }

    public getUserById(id: string) {
        return this.getById(id);
    }

    public getByEmail(email: string) {
        return userRepository.getByEmail(email);
    }

    public async create(userData: IUserDTO) {
        const hashedPassword = await passwordService.hashPassword(userData.password);

        return userRepository.create({
            ...userData,
            password: hashedPassword,
        });
    }

    public createUser(userData: IUserDTO) {
        return this.create(userData);
    }

    public async updateById(id: string, userData: IUserUpdateDTO) {
        await this.getById(id);

        if (userData.password) {
            userData.password = await passwordService.hashPassword(userData.password);
        }

        return userRepository.update(id, userData);
    }

    public async deleteById(id: string) {
        await this.getById(id);

        return userRepository.delete(id);
    }

    public async isEmailUnique(email: string) {
        const user = await userRepository.getByEmail(email);

        if (user) {
            throw new ApiError('Email is already in use', StatusCodes.BAD_REQUEST);
        }
        return true;
    }
}

export const userService = new UserService();
