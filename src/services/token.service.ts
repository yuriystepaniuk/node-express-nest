import jwt from 'jsonwebtoken';
import { ITokenPair, ITokenPayload } from '../interfaces/token.interface';
import { config } from '../config/config';
import { StatusCodes } from '../enums/status-codes.enum';
import { ApiError } from '../errors/api.error';

class TokenService {
  public generateTokens(payload: ITokenPayload): ITokenPair {
    const accessToken = jwt.sign(payload, config._JWT_ACCESS_SECRET, {
      expiresIn: config._JWT_ACCESS_LIFETIME as jwt.SignOptions['expiresIn'],
    });
    const refreshToken = jwt.sign(payload, config._JWT_REFRESH_SECRET, {
      expiresIn: config._JWT_REFRESH_LIFETIME as jwt.SignOptions['expiresIn'],
    });

    return { accessToken, refreshToken };
  }

  public verifyAccessToken(token: string, type: 'access' | 'refresh'): ITokenPayload | null {
    try {
      let secret: string;
      switch (type) {
        case 'access':
          secret = config._JWT_ACCESS_SECRET;
          break;
        case 'refresh':
          secret = config._JWT_REFRESH_SECRET;
          break;
        default:
          throw new ApiError('Invalid token type', StatusCodes.BAD_REQUEST);
      }
      return jwt.verify(token, secret) as ITokenPayload;
    } catch (error) {
      throw new ApiError('Invalid Token', StatusCodes.UNAUTHORIZED);
    }
  }

  public verifyRefreshToken(token: string): ITokenPayload | null {
    try {
      return jwt.verify(token, config._JWT_REFRESH_SECRET!) as ITokenPayload;
    } catch (error) {
      return null;
    }
  }
}

export const tokenService = new TokenService();
