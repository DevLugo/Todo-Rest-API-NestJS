"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const microservices_1 = require("@nestjs/microservices");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.getUserById = async (id) => {
            const found = await this.findOne(id);
            if (!found)
                throw new microservices_1.RpcException(`Product with ID ${id} not found`);
            return found;
        };
        this.createUser = async (userDto) => {
            return await this.save(userDto);
        };
    }
};
UsersRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map