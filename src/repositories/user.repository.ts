import { IUser, IUserDTO } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
    public getAll():Promise<IUser[]> {
        return User.find();
    }

    public create(user: IUserDTO):Promise<IUser> {
        return User.create(user);
    }
    public getById(id: string):Promise<IUser | null> {
        return User.findById(id);
    }

    public update(id: string, user: IUserDTO):Promise<IUser | null> {
        return User.findByIdAndUpdate(id, user, { new: true });
    }
}

export const userRepository = new UserRepository();