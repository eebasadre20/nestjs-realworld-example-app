import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UserRO } from './user.interface';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { User } from './user.decorator';
import { ValidationPipe } from '../shared/pipes/validation.pipe';
import { ResetPasswordDto } from './dto/reset-password.dto';

import {
  ApiBearerAuth, ApiTags
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get('user')
  async findMe(@User('email') email: string): Promise<UserRO> {
    return await this.userService.findByEmail(email);
  }

  @Get('user/:id')
  async findById(@User('id') id: number): Promise<UserRO> {
    return await this.userService.findById(id);
  }


  @Put('user')
  async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @UsePipes(new ValidationPipe())
  @Post('users')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete('users/:id')
  async delete(@Param() params) {
    const users = await this.userService.findAll();
    console.log(users)
    return await this.userService.delete(params.id);
  }

  @UsePipes(new ValidationPipe())
  @Post('users/login')
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<UserRO> {
    const _user = await this.userService.findOne(loginUserDto);

    const errors = {User: ' not found'};
    if (!_user) throw new HttpException({errors}, 401);

    const token = await this.userService.generateJWT(_user);
    const {email, username, bio, image} = _user;
    const user = {email, token, username, bio, image};
    return {user}
  }

  @UsePipes(new ValidationPipe())
  @Post('users/reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto): Promise<void> {
    return this.userService.resetPassword(resetPasswordDto);
  }
}
