import { HttpStatus } from '@nestjs/common';
import { UserErrorMessages } from '../enum/enum.error';

export class UserExceptions {
  static handleError(error: string): { message: string, statusCode: number } {
    let message: string;
    let statusCode: number;

    if (error === 'Usuário já existe') {
      message = UserErrorMessages.UserAlreadyExists;
      statusCode = HttpStatus.CONFLICT;
    } else if (error === 'Campos obrigatórios não preenchidos') {
      message = UserErrorMessages.MissingRequiredFields;
      statusCode = HttpStatus.BAD_REQUEST;
    } else if (error === 'O usuário deve ter pelo menos 18 anos de idade') {
      message = UserErrorMessages.InvalidAge;
      statusCode = HttpStatus.BAD_REQUEST;
    } else if (error === 'Nenhum usuário encontrado') {
      message = UserErrorMessages.UserNotFound;
      statusCode = HttpStatus.NOT_FOUND;
    }

    return { message, statusCode };
  }

}
