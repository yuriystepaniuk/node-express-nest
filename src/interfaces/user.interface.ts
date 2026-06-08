import { RoleEnum } from "../enums/role.enum";
import { IBase } from "./base.interface";

export interface IUser extends IBase {
    _id: string;
    email: string;
    password: string;
    role: RoleEnum;
    name: string;
    surname: string;
    age: number;
    isDeleted: boolean;
    isVerified: boolean;
}

export type IUserCreateDTO = Pick<IUser, 'email' | 'password' | 'name' | 'surname' | 'age'> & Partial<Pick<IUser, 'role'>>;
export type IUserDTO = IUserCreateDTO;

export type IUserUpdateDTO = Partial<Pick<IUser, 'email' | 'password' | 'name' | 'surname' | 'age'>>;
