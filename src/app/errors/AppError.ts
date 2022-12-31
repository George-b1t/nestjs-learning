import { HttpException } from "@nestjs/common";

export class AppError extends HttpException {
  constructor(statusCode: number, message: string[], error: string) {
    super({
      statusCode,
      message,
      error
    }, statusCode);
  }
}