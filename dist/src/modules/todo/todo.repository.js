"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("./todo.entity");
const microservices_1 = require("@nestjs/microservices");
let TodoRepository = class TodoRepository extends typeorm_1.Repository {
    async createTodo(todoDto) {
        return this.save(todoDto);
    }
    async getAllByUserId(id) {
        return this.find({
            where: { user: id },
        });
    }
    async updateTodo(id, todoDto) {
        return this.save(Object.assign(Object.assign({}, todoDto), { id }));
    }
    async deleteById(id) {
        const result = await this.delete(id);
        if (result.affected === 0) {
            throw new microservices_1.RpcException(`Todo with ID ${id} not found`);
        }
        return {
            success: true,
        };
    }
};
TodoRepository = __decorate([
    typeorm_1.EntityRepository(todo_entity_1.Todo)
], TodoRepository);
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map