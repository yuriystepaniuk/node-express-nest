import { StatusCodes } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import { ITokenPair } from "../interfaces/token.interface";
import { IUser, IUserCreateDTO } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";
import { userService } from "./user.service";

class AuthService {
    public async signup(user: IUserCreateDTO): Promise<{ user: IUser; tokens: ITokenPair }> {
        await userService.isEmailUnique(user.email);

        const createdUser = await userService.create(user);
        const tokens = tokenService.generateTokens({
            userId: createdUser._id,
            role: createdUser.role,
        });

        await tokenRepository.create({
            ...tokens,
            _userId: createdUser._id,
        });

        return {
            user: createdUser,
            tokens,
        };
    }

    public async signIn(dto: Pick<IUser, 'email' | 'password'>): Promise<{ user: IUser; tokens: ITokenPair }> {
        const user = await userRepository.getByEmail(dto.email);

        if (!user) {
            throw new ApiError('Invalid email or password', StatusCodes.UNAUTHORIZED);
        }

        const isPasswordValid = await passwordService.comparePasswords(dto.password, user.password);

        if (!isPasswordValid) {
            throw new ApiError('Invalid email or password', StatusCodes.UNAUTHORIZED);
        }

        const tokens = tokenService.generateTokens({
            userId: user._id,
            role: user.role,
        });

        await tokenRepository.create({
            ...tokens,
            _userId: user._id,
        });

        return {
            user,
            tokens,
        };
    }
}

export const authService = new AuthService();
