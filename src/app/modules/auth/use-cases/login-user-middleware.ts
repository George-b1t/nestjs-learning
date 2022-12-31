import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from 'src/app/errors/AppError';
import { UserRepository } from '../../user/user-repository';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

@Injectable()
export class LoginUserMiddleware implements NestMiddleware {
  constructor(private userRepository: UserRepository) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if(!authorization) throw new AppError("empty authorization")

    try {
      const token = authorization.replace("Bearer ", "").trim();

      const payload = verify(token, process.env.SECRET_USER_TOKEN) ?? {};

      const { id } = payload as TokenPayload;

      const user = await this.userRepository.findById(id);

      if(!user) throw new Error();

      next();
    } catch {
      throw new AppError("invalid token");
    }
  }
}
