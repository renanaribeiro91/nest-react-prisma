import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpException, HttpCode, Res, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';
import { Response } from 'express';
import { UserExceptions } from '../../../shared/exceptions/handleError/handleError';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: UserDto, @Res() res: Response): Promise<void> {
    try {
      const { error, user } = await this.userService.createUser(createUserDto);

      if (Boolean(error) && !user) {
        const { message, statusCode } = UserExceptions.handleError(error);
        res.status(statusCode).send({
          message: message,
          success: false,
        });

        return

      }

      res.status(HttpStatus.CREATED).send({
        user,
        message: 'Usuário criado com sucesso.',
        success: true,
      });
    } catch (error) {
        throw new HttpException('Erro ao criar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') userId: number, @Res() res: Response): Promise<void> {
    try {
      const { error, user } = await this.userService.getUserById(userId);

      if (Boolean(error) && !user) {
        const { message, statusCode } = UserExceptions.handleError(error);
        res.status(statusCode).send({
          message: message,
          success: false,
        });

        return
      }

      res.status(HttpStatus.OK).send(user);
    } catch (error) {
      throw new HttpException('Erro ao buscar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getAllUsers(@Res() res: Response, @Query('name') name?: string): Promise<void> {
    try {

        const { error, users } = await this.userService.getAllUsers(name);

        if (Boolean(error) && !users) {
          const { message, statusCode } = UserExceptions.handleError(error);
          res.status(statusCode).send({
            message: message,
            success: false,
          });
          return
        }


      res.status(HttpStatus.OK).send(users);
    } catch (error) {
      throw new HttpException('Erro ao buscar usuários', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Put(':id')
  async updateUser(@Param('id') userId: number, @Body() updateUserDto: UserDto, @Res() res: Response): Promise<void> {
    try {
      const { error, user } = await this.userService.updateUser(userId, updateUserDto);

      if (Boolean(error) && !user) {
        const { message, statusCode } = UserExceptions.handleError(error);
        res.status(statusCode).send({
          message: message,
          success: false,
        });
        return
      }

      res.status(HttpStatus.OK).send({
        user,
        message: 'Usuário atualizado com sucesso.',
        success: true,
      });
    } catch (error) {
      throw new HttpException('Erro ao atualizar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number, @Res() res: Response): Promise<void> {
    try {
      const { error } = await this.userService.deleteUser(userId);

      if (Boolean(error)) {
        const { message, statusCode } = UserExceptions.handleError(error);
        res.status(statusCode).send({
          message: message,
          success: false,
        });
        return
      }

      res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      throw new HttpException('Erro ao excluir usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
