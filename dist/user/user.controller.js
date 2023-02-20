"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dtos/user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers(res) {
        const users = await this.userService.getAllUsers();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'All Users in Database',
            users,
        });
    }
    async getUserById(id, res) {
        const user = await this.userService.getUser(id);
        return res.status(common_1.HttpStatus.OK).json({
            message: `user with id: ${id}`,
            user,
        });
    }
    async createUser(createUserDto, res) {
        const userCreated = await this.userService.createNewUser(createUserDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User Created',
            userCreated,
        });
    }
    async deleteUser(userId, res) {
        const userDelete = await this.userService.deleteUserById(userId);
        if (userDelete == null)
            throw new common_1.NotFoundException('user does not exist');
        return res.status(common_1.HttpStatus.OK).json(userDelete);
    }
    async deleteAllUsers(res) {
        const users = await this.userService.deleteUsers();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'All the Users Deleted',
            users,
        });
    }
    async UpdateUsers(userId, updateUserDto, res) {
        if (!userId)
            throw new common_1.NotFoundException();
        const userUpdate = await this.userService.updateUser(userId, updateUserDto);
        res.status(common_1.HttpStatus.OK).json({
            message: 'user update',
            userUpdate,
        }),
            { new: userUpdate };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteAllUsers", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpdateUsers", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map