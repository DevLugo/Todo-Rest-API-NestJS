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
const todo_service_1 = require("./todo.service");
const TodoCreate_dto_1 = require("./dto/TodoCreate.dto");
const todo_entity_1 = require("./todo.entity");
const passport_1 = require("@nestjs/passport");
const TodoUpdate_dto_1 = require("./dto/TodoUpdate.dto");
const Todo_dto_1 = require("./dto/Todo.dto");
const swagger_1 = require("@nestjs/swagger");
let TodoController = class TodoController {
    constructor(_todoService) {
        this._todoService = _todoService;
    }
    async createTodo(todoCreateDto, req) {
        const todo = new todo_entity_1.Todo();
        todo.description = todoCreateDto.description;
        todo.user = req.user.id;
        const createdTodo = await this._todoService.createTodo(todo);
        return createdTodo;
    }
    async getTodos(req) {
        const todos = this._todoService.getTodosByUserId(req.user.id);
        return todos;
    }
    async updateTodo(todoUpdateDto, todoId, req) {
        const userId = Number(req.user.id);
        const todo = this._todoService.updateTodo(Number(todoId), userId, todoUpdateDto);
        return todo;
    }
    async deleteTodo(todoId, req) {
        const userId = Number(req.user.id);
        const todo = this._todoService.removeTodo(Number(todoId), userId);
        return todo;
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 201, type: Todo_dto_1.TodoDto }),
    common_1.Post('/'),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TodoCreate_dto_1.TodoCreateDto, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, type: [Todo_dto_1.TodoDto] }),
    common_1.Get('/'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodos", null);
__decorate([
    swagger_1.ApiResponse({ status: 200, type: Todo_dto_1.TodoDto }),
    common_1.Put('/:id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TodoUpdate_dto_1.TodoUpdateDto, String, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
TodoController = __decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Controller('todo'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map