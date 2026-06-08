import { randomUUID } from "crypto";
import { IToken, ITokenPair } from "../interfaces/token.interface";
import { Token } from "../models/token.model";

type ITokenCreateDTO = ITokenPair & Pick<IToken, '_userId'>;

class TokenRepository {
    public create(dto: ITokenCreateDTO): Promise<IToken> {
        return Token.create({
            ...dto,
            _id: randomUUID(),
        });
    }
}

export const tokenRepository = new TokenRepository();
