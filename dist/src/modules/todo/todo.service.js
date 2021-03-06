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
const typeorm_1 = require("@nestjs/typeorm");
const todo_repository_1 = require("./todo.repository");
let TodoService = class TodoService {
    constructor(_todoRepository) {
        this._todoRepository = _todoRepository;
    }
    async createTodo(todo) {
        return this._todoRepository.createTodo(todo);
    }
    async getTodosByUserId(id) {
        return this._todoRepository.getAllByUserId(Number(id));
    }
    async updateTodo(id, userId, todoUpdateDto) {
        let todoToUpdate = await this._todoRepository.findOne({
            where: {
                id,
                user: userId,
            },
        });
        if (!todoToUpdate) {
            throw new common_1.NotFoundException();
        }
        let finalObject = Object.assign(Object.assign({}, todoToUpdate), todoUpdateDto);
        let updatedTodo = await this._todoRepository.save(finalObject);
        return updatedTodo;
    }
    async removeTodo(id, userId) {
        const todoToRemove = await this._todoRepository.findOne({
            where: {
                id,
                user: userId,
            },
        });
        if (!todoToRemove) {
            throw new common_1.NotFoundException();
        }
        await this._todoRepository.deleteById(String(id));
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_repository_1.TodoRepository)),
    __metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map