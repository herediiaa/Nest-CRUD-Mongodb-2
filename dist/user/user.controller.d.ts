import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(res: any): Promise<any>;
    getUserById(id: string, res: any): Promise<User>;
    createUser(createUserDto: CreateUserDto, res: any): Promise<any>;
    deleteUser(userId: any, res: any): Promise<any>;
    deleteAllUsers(res: any): Promise<any>;
    UpdateUsers(userId: string, updateUserDto: CreateUserDto, res: any): Promise<void>;
}
