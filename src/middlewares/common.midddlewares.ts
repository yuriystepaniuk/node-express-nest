import { NextFunction, Request, Response } from 'express';
import { isObjectIdOrHexString } from 'mongoose';
import { ApiError } from '../errors/api.error';
import { ObjectSchema } from 'joi';

class CommonMiddleware {
  public isIdValidate(key: string) {
    return (req: Request, res: Response, next: NextFunction): void => {
      try {
        const { id } = req.params;

        if (!isObjectIdOrHexString(id)) {
          throw new ApiError(`Invalid ${key} id`, 400);
        }
      } catch (e) {
        return next(e);
      }
    };
  }

  public validateBody(validationSchema: ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        req.body = await validationSchema.validateAsync(req.body);
        next();
      } catch (e) {
        next(new ApiError(e.details[0].message, 400));
      }
    };
  }
}

export const commonMiddleware = new CommonMiddleware();
