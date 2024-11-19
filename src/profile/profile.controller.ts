import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import { Request } from 'express';
import { ProfileService } from './profile.service';
import { ProfileRO } from './profile.interface';
import { User } from '../user/user.decorator';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}

  @Get(':username')
  async getProfile(@User('id') userId: number, @Param('username') username: string): Promise<ProfileRO> {
    return await this.profileService.findProfile(userId, username);
  }

  @Post(':username/follow')
  async follow(@User('email') email: string, @Param('username') username: string): Promise<ProfileRO> {
    return await this.profileService.follow(email, username);
  }

  @Delete(':username/unfollow')
  async unFollow(@User('id') userId: number,  @Param('username') username: string): Promise<ProfileRO> {
    return await this.profileService.unFollow(userId, username);
  }

  @ApiOperation({ summary: 'Get all followers of a user' })
  @ApiResponse({ status: 200, description: 'Return all followers.'})
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Get(':username/followers')
  async getFollowers(@Param('username') username: string): Promise<User[]> {
    return await this.profileService.findAllFollowers(username);
  }

}