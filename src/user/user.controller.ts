import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export default class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(@Res() res) {
    const users = await this.userService.getAllUsers();
    return res.status(HttpStatus.OK).json({
      message: 'All Users in Database',
      users,
    });
  }
  @Get(':id')
  async getUserById(@Param('id') id: string, @Res() res): Promise<User> {
    const user = await this.userService.getUser(id);
    return res.status(HttpStatus.OK).json({
      message: `user with id: ${id}`,
      user,
    });
  }

  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res) {
    const userCreated = await this.userService.createNewUser(createUserDto);
    return res.status(HttpStatus.OK).json({
      message: 'User Created',
      userCreated,
    });
  }
  @Delete('/delete')
  async deleteUser(@Query('userId') userId, @Res() res) {
    const userDelete = await this.userService.deleteUserById(userId);
    if (userDelete == null) throw new NotFoundException('user does not exist');
    return res.status(HttpStatus.OK).json(userDelete);
  }
  @Delete()
  async deleteAllUsers(@Res() res) {
    const users = await this.userService.deleteUsers();
    return res.status(HttpStatus.OK).json({
      message: 'All the Users Deleted',
      users,
    });
  }
  @Put()
  async UpdateUsers(
    @Query('userId') userId: string,
    @Body() updateUserDto: CreateUserDto,
    @Res() res,
  ) {
    if (!userId) throw new NotFoundException();
    const userUpdate = await this.userService.updateUser(userId, updateUserDto);
    res.status(HttpStatus.OK).json({
      message: 'user update',
      userUpdate,
    }),
      { new: userUpdate };
  }
}
