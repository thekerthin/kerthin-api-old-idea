import { Injectable } from '@nestjs/common';
import { mapper } from '@kerthin/utils';
import { Consumer, ConsumerExistsException } from '@kerthin/security';
import UserRepository from '@infrastructure/database/repositories/user.repository';
import { User } from '@infrastructure/database/entities/user.entity';
import { SignUpDto, SignInDto } from '@application/api/dtos/security';
import { SystemException } from '@shared/exceptions';
import { SystemErrorCodeEnum } from '@shared/enums';

@Injectable()
export default class SecurityService {
  constructor(
    private readonly consumer: Consumer,
    private readonly userRepository: UserRepository,
  ) {}

  async signUp(data: SignUpDto) {
    try {
      const user = mapper(User, data);

      const consumer = await this.consumer.create(data.username);

      await this.consumer.registerOAuth2({
        consumerId: consumer.id,
      });

      await this.consumer.registerBasicAuth({
        consumerId: consumer.id,
        username: data.username,
        password: data.password,
      });

      await this.userRepository.save(user);
    } catch (error) {
      if (error instanceof ConsumerExistsException) {
        throw new SystemException(
          SystemErrorCodeEnum.CONSUMER_EXIST,
          error.message,
        );
      }
      throw error;
    }
  }

  async signIn(data: SignInDto) {
    return await this.consumer.findOAuth2Token(data.consumerId);
  }
}
