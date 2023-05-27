
import { User } from '@prisma/client';
import sinon from 'sinon';
import { UserService } from '../../services/user.service';
import { UserRepository } from '../../repository/user.repository';
import { AddressService } from '../../../../shared/services/address.service';


describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository;
  let addressService: AddressService;

  beforeEach(() => {
    userRepository = sinon.createStubInstance(UserRepository);
    addressService = sinon.createStubInstance(AddressService);
    userService = new UserService(userRepository, addressService);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const createUser: User = {
        id:1,
        name: 'John Doe',
        birthdate: new Date(),
        document: '123456789',
        acceptedTermsAndConditions: true,
        zipcode: 12345,
        street: 'Street 123',
        neighborhood: 'Neighborhood',
        city: 'City',
        state: 'State',
        createdAt:new Date(),
        updatedAt:new Date()
      };

      sinon.stub(userRepository, 'getUsersByDocument').resolves(null);
      sinon.stub(userRepository, 'createUser').resolves({} as User);

      const result = await userService.createUser(createUser);

      expect(result.error).toBeNull();
      expect(result.user).toBeDefined();
    });
  });

  describe('getUserById', () => {
    it('should get user by ID', async () => {
      const userId = 1;

      sinon.stub(userRepository, 'getUserById').resolves({} as User);

      const result = await userService.getUserById(userId);

      expect(result.error).toBeNull();
      expect(result.user).toBeDefined();
    });
  });

  describe('getAllUsers', () => {
    it('should get all users', async () => {
      const name = 'John';

      sinon.stub(userRepository, 'getAllUsers').resolves([{}] as User[]);

      const result = await userService.getAllUsers(name);

      expect(result.error).toBeNull();
      expect(result.users).toBeDefined();
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const userId = 1;
      const updateUser: User = {
        id:1,
        name: 'John Doe',
        birthdate: new Date(),
        document: '123456789',
        acceptedTermsAndConditions: true,
        zipcode: 12345,
        street: 'Street 123',
        neighborhood: 'Neighborhood',
        city: 'City',
        state: 'State',
        createdAt:new Date(),
        updatedAt:new Date()
      };

      sinon.stub(userRepository, 'getUserById').resolves({} as User);
      sinon.stub(userRepository, 'updateUser').resolves({} as User);

      const result = await userService.updateUser(userId, updateUser);

      expect(result.error).toBeNull();
      expect(result.user).toBeDefined();
    });
  });

  describe('deleteUser', () => {
    it('should delete an existing user', async () => {
      const userId = 1;

      sinon.stub(userRepository, 'getUserById').resolves({} as User);
      sinon.stub(userRepository, 'deleteUser').resolves();

      const result = await userService.deleteUser(userId);

      expect(result.error).toBeNull();
    });
  });
});
