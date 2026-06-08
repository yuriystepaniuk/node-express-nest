import { IUser, IUserDTO, IUserUpdateDTO } from "../interfaces/user.interface";
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

    public getByEmail(email: string): Promise<IUser | null> {
        return User.findOne({ email });
    }

    public update(id: string, user: IUserUpdateDTO):Promise<IUser | null> {
        return User.findByIdAndUpdate(id, user, { new: true });
    }

    public delete(id: string): Promise<IUser | null> {
        return User.findByIdAndDelete(id);
    }
}

export const userRepository = new UserRepository();
