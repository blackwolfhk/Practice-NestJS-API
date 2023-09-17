import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Create a fake copy of the users service
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup('on99@gmail.com', 'on99123');

    expect(user.password).not.toEqual('on99123');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([{ id: 1, email: 'a', password: '1' } as User]);
    try {
      await expect(service.signup('on99@gmail.com', 'on99123')).rejects.toThrow(
        BadRequestException,
      );
    } catch (err) {
      console.log('err :', err);
    }
  });

  it('throws if signin is salled with an unused email', async () => {
    await expect(
      service.signin('asdflkj@asklfkj.com', 'passagfd'),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws if an invalid password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        {
          email: 'asdf@asdf.com',
          password: 'llaskdjf',
        } as User,
      ]);
    try {
      await expect(
        service.signin('zdxfgasdg@asdfga.com', 'passowrd'),
      ).rejects.toThrow(BadRequestException);
    } catch (err) {
      console.log('err :', err);
    }
  });

  it('returns a user if correct password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        {
          email: 'asdf@asdf.com',
          password:
            '2fdb2914ed8a134d.98d93e2915696c8df86f8dc4d3632b889daa273a0d669a7b59cdc9d3597515df',
        } as User,
      ]);

    const user = await service.signin('asdf@sdgs.com', 'mypassword');
    expect(user).toBeDefined();
  });
});
