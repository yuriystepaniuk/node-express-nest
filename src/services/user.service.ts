import { userRepository } from "../repositories/user.repository"
import { IUserDTO } from "../interfaces/user.interface";

class UserService {
    public getAllUsers() {
        return userRepository.getAll();
    }

    public getUserById(id: string) {
        return userRepository.getById(id);
    }

    public createUser(userData: IUserDTO) {
        return userRepository.create(userData);
    }
}

export const userService = new UserService();