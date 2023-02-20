import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}

  /* Get all Users in DataBase */
  async getAllUsers() {
    return await this.userModel.find();
  }
  /* Get user by Id in Database */
  async getUser(id: string) {
    return await this.userModel.findById(id);
  }
  /* Create new user in DataBase */
  async createNewUser(createUserDto) {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }
  /* Delete user by Id in DataBase */
  async deleteUserById(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
  /* Delete All users in DataBase */
  async deleteUsers() {
    return await this.userModel.deleteMany();
  }
  /* Update user by Id in DataBase */
  async updateUser(userId, updateUserDto) {
    return await this.userModel.findByIdAndUpdate(userId, updateUserDto, {
      new: true,
    });
  }
}
