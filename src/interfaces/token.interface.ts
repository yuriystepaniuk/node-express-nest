import { RoleEnum } from '../enums/role.enum';
import { IBase } from './base.interface';

interface IToken extends IBase {
  accessToken: string;
  refreshToken: string;
  _id: string;
  _userId: string;
}

interface ITokenPayload {
  userId: string;
  role: RoleEnum;
}

type ITokenPair = Pick<IToken, 'accessToken' | 'refreshToken'>;

export { IToken, ITokenPayload, ITokenPair };
