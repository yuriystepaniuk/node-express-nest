import joi from "joi";
import { RoleEnum } from "../enums/role.enum";

export class UserValidator {
    private static email = joi.string().email().trim().lowercase();
    private static password = joi.string().min(6).max(128);
    private static role = joi.string().valid(...Object.values(RoleEnum));
    private static name = joi.string().min(3).max(30).trim();
    private static surname = joi.string().regex(/^[A-Z][a-z]{1,9}$/)
    private static age = joi.number().min(2).max(100);

    public static createUser = joi.object({
        email: this.email.required(),
        password: this.password.required(),
        role: this.role,
        name: this.name.required(),
        surname: this.surname.required(),
        age: this.age.required()
    });

    public static loginUser = joi.object({
        email: this.email.required(),
        password: this.password.required()
    });
}
