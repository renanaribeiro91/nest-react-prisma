import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { AddressService } from '../../../shared/services/address.service';
import { UserDto } from '../dto/user.dto';
import { User } from '@prisma/client';
import { validateAge } from '../../../shared/helpers/validateAge';
import { v4 as uuidv4 } from 'uuid';
import { formatBirthdate } from '../../../shared/ultis/format';



@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private addressService: AddressService,
  ) {}

  async createUser(createUser: UserDto): Promise<{ error: string | null; user: User | null }> {
    const existingUser = await this.userRepository.getUsersByDocument(createUser.document);

    if (existingUser) {
      return { error: 'Usuário já existe', user: null };
    }

    if (!createUser.name || !createUser.birthdate || !createUser.zipcode) {
      return { error: 'Campos obrigatórios não preenchidos', user: null };
    }

    const validadeAge = validateAge(createUser.birthdate);

    if (!validadeAge) {
      return { error: 'O usuário deve ter pelo menos 18 anos de idade', user: null };
    }

    const user: User = {
      id: parseInt(uuidv4().split('-')[0], 16),
      ...createUser,
      document:createUser.document.replace('-', ''),
      birthdate: formatBirthdate(createUser.birthdate),
      ...await this.addressService.getAddressByZipcode(createUser.zipcode),
      createdAt: new Date(),
      updatedAt: null,
    };

    const createdUser = await this.userRepository.createUser(user);

    return { error: null, user: createdUser };
  }

  async getUserById(userId: number): Promise<{ error: string | null; user: User | null }> {
    const user = await this.userRepository.getUserById(Number(userId));

    if (!user) {
      return { error: 'Usuário não encontrado', user: null };
    }

    return { error: null, user };
  }

  async getAllUsers(name:string): Promise<{ error: string | null; users: User[] | null | boolean}> {
    const users = await this.userRepository.getAllUsers(name);

    if (!users) {
      return { error: 'Nenhum usuário encontrado', users: null };
    }

    return { error: null, users };
  }

  async updateUser(userId: number, updateUser: UserDto): Promise<{ error: string | null; user: User | null }> {

    const existingUser = await this.userRepository.getUserById(Number(userId));

    if (!existingUser) {
      return { error: 'Usuário não encontrado', user: null };
    }

    const user: User = {
      id: parseInt(uuidv4().split('-')[0], 16),
      ...updateUser,
      birthdate: new Date(updateUser.birthdate),
      ...await this.addressService.getAddressByZipcode(updateUser.zipcode),
      createdAt: new Date(),
      updatedAt:new Date()
    };

    const updatedUser = await this.userRepository.updateUser(existingUser.id, user);

    return { error: null, user: updatedUser };
  }

  async deleteUser(userId: number): Promise<{ error: string | null }> {
    const existingUser = await this.userRepository.getUserById(Number(userId));

    if (!existingUser) {
      return { error: 'Usuário não encontrado' };
    }

    await this.userRepository.deleteUser(existingUser.id);

    return { error: null };
  }

}
